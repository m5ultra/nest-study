import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { HashPasswordMiddleware } from '../../middlewares/auth.middleware'

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashPasswordMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.POST })
  }
}
