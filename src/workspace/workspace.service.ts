import { Injectable } from '@nestjs/common';

// POC AREA
import * as k8s from '@kubernetes/client-node';
import { PrismaService } from 'nestjs-prisma';
import { WorkspaceStatus } from '@prisma/client';

const kc = new k8s.KubeConfig();
kc.loadFromCluster();

const k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
//

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) {}

  async getWorkspaces(ownerId: number) {
    return this.prisma.workspace.findMany({ where: { ownerId: ownerId } });
  }

  async createWorkspace(ownerId: number, workspaceName: string) {
    await this.prisma.workspace.create({
      data: {
        id: workspaceName,
        description: '',
        ownerId: ownerId,
        status: WorkspaceStatus.STOPPED,
      },
    });

    await this.createWorkspaceInstance(workspaceName);
  }

  async deleteWorkspace(workspaceName: string) {
    return this.prisma.workspace.delete({ where: { id: workspaceName } });
  }

  async createWorkspaceInstance(workspaceName: string) {
    try {
      const response = await k8sCoreApi.createNamespacedPod('workspace', {
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          name: workspaceName,
          labels: {
            'ajou.codes/type': 'workspace',
            'ajou.codes/ownerId': '1',
          },
        },
        spec: {
          containers: [
            {
              name: 'code-server',
              image: 'gitpod/openvscode-server',
            },
          ],
        },
      });

      return response;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  async deleteWorkspacePVC(pvcName: string) {
    await k8sCoreApi.deleteNamespacedPersistentVolumeClaim(pvcName, 'workspace');
  }
}
