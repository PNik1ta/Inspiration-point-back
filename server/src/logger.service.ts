import { Injectable, LogLevel, LoggerService, OnModuleInit } from "@nestjs/common";
import pino from 'pino';
import { Client } from '@elastic/elasticsearch';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ElasticsearchLoggerService implements LoggerService, OnModuleInit {
	private logger: pino.Logger;
	private esClient: Client;

	constructor(private readonly configService: ConfigService) {
		this.logger = pino();
		console.log(configService.get('ES_HOST'));
		
		this.esClient = new Client({ node: `http://${configService.get('ES_HOST')}:9200` });
	}

	log(message: string) {
		this.logger.info(message);
		this.esClient.index({
			index: 'logs',
			body: { message, level: 'info' },
		});
	}

	error(message: string, trace: string) {
		this.logger.error(message, { trace });
		this.esClient.index({
			index: 'logs',
			body: { message, level: 'error', trace },
		});
	}
	warn(message: string) {
		this.logger.warn(message);
		this.esClient.index({
			index: 'logs',
			body: { message, level: 'warn' },
		});
	}
	debug(message: string) {
		this.logger.debug(message);
		this.esClient.index({
			index: 'logs',
			body: { message, level: 'debug' },
		});
	}

	verbose?(message: string) {
		this.logger.trace(message);
		this.esClient.index({
			index: 'logs',
			body: { message, level: 'verbose' },
		});
	}

	logHTTPRequest(httpMethod: string, url: string, body: string, status: number) {
		this.esClient.index({
			index: 'http-logs',
			body: {
				httpMethod,
				url,
				body,
				status,
				level: 'info'
			}
		})
	}

	onModuleInit() {
		this.log('Server started!');
	}
}