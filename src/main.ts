import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { logger } from './common/middleware/logger.middleware'

void (async () => {
  const app = await NestFactory.create(AppModule)
  app.use(logger)
  const config = new DocumentBuilder()
    .setTitle('Nest开发文档')
    .setDescription('测试Swagger')
    .setVersion('1.0')
    .addTag('天上人间接口文档')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)
  await app.listen(9527)
})()
