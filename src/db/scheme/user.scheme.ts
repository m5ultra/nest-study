import { SchemaFactory } from '@nestjs/mongoose'
import { User } from '../../interface/user.interface'

export const UserScheme = SchemaFactory.createForClass(User)
