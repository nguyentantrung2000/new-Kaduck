import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class PlayerGateway {
  @WebSocketServer() server: any;
  lobby: '';
  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('lobby')
  handleMessage(client: any, payload: any): string {
    console.log(payload);
    this.server.emit(`lobby-${payload.pin}`, payload);
    return 'Hello world!';
  }

  // @SubscribeMessage('join')
  // handleJoin(client: Socket, payload: any): string {
  //   client.join(payload.id);

  //   client.broadcast.to(payload.id).emit('receive-joiner', payload.name);
  //   return 'Joined';
  // }
}
