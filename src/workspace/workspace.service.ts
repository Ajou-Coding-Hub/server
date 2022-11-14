import { Injectable } from '@nestjs/common';

// POC AREA
import * as k8s from '@kubernetes/client-node';
import { V1Deployment } from '@kubernetes/client-node/dist/gen/model/v1Deployment';
import { V1Namespace, V1Service } from '@kubernetes/client-node';
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

  async deleteWorkspace(workspaceName: string) {
    return this.prisma.workspace.delete({ where: { name: workspaceName } });
  }

  async createWorkspaceK8s(workspaceName: string) {
    const service: V1Service = {
      apiVersion: 'v1',
      kind: 'Service',
      metadata: {
        name: 'code-server',
      },
      spec: {
        selector: {
          app: 'code-server',
        },
        ports: [
          {
            name: 'http',
            port: 80,
            targetPort: 'code-server',
            protocol: 'TCP',
          },
        ],
      },
    };
    const deployment: V1Deployment = {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
        name: 'code-server-deployment',
      },
      spec: {
        replicas: 1,

        selector: {
          matchLabels: {
            app: 'code-server',
          },
        },
        template: {
          metadata: {
            labels: {
              app: 'code-server',
            },
          },
          spec: {
            containers: [
              {
                name: 'code-server',
                image: 'gitpod/openvscode-server',
                ports: [
                  {
                    name: 'code-server',
                    containerPort: 3000,
                  },
                ],
              },
            ],
          },
        },
      },
    };

    try {
      await k8sCoreApi.createNamespace({
        metadata: {
          name: workspaceName,
          labels: {
            'ajou.codes/type': 'workspace',
          },
        },
      });

      await k8sAppsApi.createNamespacedDeployment(workspaceName, deployment);
      await k8sCoreApi.createNamespacedService(workspaceName, service);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  async createWorkspacePoc(ownerId: number, workspaceName: string) {
    await this.prisma.workspace.create({
      data: {
        name: workspaceName,
        description: '',
        ownerId: ownerId,
        status: WorkspaceStatus.STOPPED,
      },
    });

    await this.createWorkspaceK8s(workspaceName);
  }
}
