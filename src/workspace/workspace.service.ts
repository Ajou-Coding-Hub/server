import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';

// POC AREA
import * as k8s from '@kubernetes/client-node';
import { PrismaService } from 'nestjs-prisma';
import { WorkspaceStatus } from '@prisma/client';

const kc = new k8s.KubeConfig();
kc.loadFromCluster();

const k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
//

const generateRandomString = (num) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) {}

  async getWorkspace(workspaceId: string) {
    return this.prisma.workspace.findUnique({ where: { id: workspaceId } });
  }

  async getWorkspaces(ownerId: number) {
    return this.prisma.workspace.findMany({ where: { ownerId: ownerId } });
  }

  async createWorkspace(ownerId: number, workspaceName: string) {
    const workspace = await this.prisma.workspace.findUnique({
      where: {
        id: workspaceName,
      },
    });
    if (workspace) {
      throw new ForbiddenException('이미 존재하는 워크스페이스입니다.');
    }

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

  async deleteWorkspace(workspaceId: string) {
    await k8sCoreApi.deleteNamespacedPod(workspaceId, 'workspace');

    return this.prisma.workspace.delete({ where: { id: workspaceId } });
  }

  async createWorkspaceInstance(workspaceName: string) {
    try {
      const response = await k8sCoreApi.createNamespacedPod('workspace', {
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          name: workspaceName,
          labels: {
            'ajou.codes/ownerToken': generateRandomString(32),
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
    await k8sCoreApi.deleteNamespacedPersistentVolumeClaim(
      pvcName,
      'workspace',
    );
  }
}
