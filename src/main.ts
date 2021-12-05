import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { logger } from './common/middleware/logger.middleware'
import { Logger } from '@nestjs/common'
import { Log4jsLogger } from '@nestx-log4js/core'
const PORT = 9527
const Log = new Logger('main.ts')
void (async () => {
  const app = await NestFactory.create(AppModule)
  app.use(logger)
  const config = new DocumentBuilder()
    .setTitle('项目管理平台')
    .setDescription('xxx平台接口文档')
    .setVersion('1.0')
    .addTag('项目管理')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)
  await app.listen(PORT)
  app.useLogger(app.get(Log4jsLogger))
  Log.log(`Listen in http://localhost:${PORT}/doc`)
})()
