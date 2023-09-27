import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { ElasticsearchLoggerService } from "./logger.service";

@WebSocketGateway({ namespace: 'jsonData', transports: ['websocket'] })
export class JSONWebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
	@WebSocketServer() server: Server;

	constructor(private readonly loggerService: ElasticsearchLoggerService) {}

	handleConnection(client: Socket) {
		this.loggerService.log(`Client connected: ${client.id}`)
	}

	handleDisconnect(client: Socket) {
		this.loggerService.log(`Client disconnected: ${client.id}`)
	}

	@SubscribeMessage('message')
	handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
		this.loggerService.log(`Received message from client: ${data}`);
		client.emit('response', 'Data received!');
	}
}