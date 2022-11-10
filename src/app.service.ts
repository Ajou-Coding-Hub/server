import { Injectable } from '@nestjs/common';

// POC AREA
import * as k8s from '@kubernetes/client-node';
import { V1Deployment } from '@kubernetes/client-node/dist/gen/model/v1Deployment';
import { V1Namespace, V1Service } from '@kubernetes/client-node';

const kc = new k8s.KubeConfig();
kc.loadFromCluster();

const k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
//

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async deleteWorkspace(workspaceName: string) {

  }

  async createWorkspacePoc(namespaceName: string) {
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
      apiVersion: 'v1',
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
          name: namespaceName,
          labels: {
            'ajou.codes/type': 'workspace',
          },
        },
      });

      await k8sAppsApi.createNamespacedDeployment(namespaceName, deployment);

      await k8sCoreApi.createNamespacedService(namespaceName, service);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }
}
