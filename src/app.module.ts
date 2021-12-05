import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'
import { UserModule } from './modules/user/user.module'
import { Log4jsModule } from '@nestx-log4js/core'
@Module({
  imports: [Log4jsModule.forRoot(), DbModule, UserModule],
})
export class AppModule {}
