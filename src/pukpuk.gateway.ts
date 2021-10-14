import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';

interface PukpukPayload {
  sender: string;
  isPukpuk: boolean;
}

@WebSocketGateway({ cors: true })
export class PukpukGateway {
  @WebSocketServer() server;

  @SubscribeMessage('pukpuk')
  handleMessage(@MessageBody() pukpukPayload: PukpukPayload): void {
    this.server.emit('pukpuk', pukpukPayload);
  }
}
