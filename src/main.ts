import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger } from '@nestjs/common'
import { Log4jsLogger } from '@nestx-log4js/core'
import { logMiddleware } from './middlewares/log.middleware'

const PORT = 9527
const Log = new Logger('main.ts')
/**
 * 主方法
 */
void (async () => {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('项目管理平台')
    .setDescription('xxx平台接口文档')
    .setVersion('1.0')
    .addTag('项目管理接口')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)
  // 使用Log4js框架 包名：@nestx-log4js/core
  app.useLogger(app.get(Log4jsLogger))
  // 使用Log中间键
  app.use(logMiddleware)
  await app.listen(PORT)
  Log.log(`Listen in http://localhost:${PORT}/doc`)
})()
