import { Prop, Schema } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: '用户手机',
    example: '18015153851',
  })
  readonly phone: string

  @Prop()
  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  readonly password: string

  @Prop()
  @ApiProperty({
    description: '盐值',
    example: 'salt',
  })
  readonly salt?: string
}
