import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
  
  	createSwagger(app);
	app.use("/public", express.static(join(process.cwd(), "public")));

  	await app.listen(process.env.PORT ?? 3000);
}

function createSwagger(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle('My API')
		.setDescription('API description')
		.build();

	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, documentFactory);
}

bootstrap();
