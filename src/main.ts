import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { setupSwagger } from './configs/swagger';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  setupSwagger(app);
  const serverConfig = config.get('server');
  await app.listen(serverConfig.port);

  logger.log(`Application running on port ${serverConfig.port}`);
}
bootstrap();
