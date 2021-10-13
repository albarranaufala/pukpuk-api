import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class PukpukGateway {
  @WebSocketServer() server;

  @SubscribeMessage('pukpuk')
  handleMessage(@MessageBody() pukpuk: boolean): void {
    this.server.emit('pukpuk', pukpuk);
  }
}
