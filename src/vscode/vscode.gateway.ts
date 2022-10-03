import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
interface CodeData {
  filename: string;
  code: string;
}

@WebSocketGateway({ namespace: 'vscode', transports: ['websocket'] })
export class VscodeGateway implements OnGatewayConnection {
  handleConnection(client: Socket) {
    console.log('connect', client);
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join')
  onConnect(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    console.log('join', data);
    client.join(data);
  }

  @SubscribeMessage('leave')
  onLeave(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    console.log('leave', data);
    client.leave(data);
  }

  @SubscribeMessage('sendCode')
  onSendCode(@MessageBody() data: CodeData, @ConnectedSocket() client: Socket) {
    console.log('reciveCode', data);
    client.rooms.forEach((room) => {
      this.server.to(room).emit('reciveCode', data);
    });
  }
}
