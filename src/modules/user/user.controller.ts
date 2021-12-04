import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '../../interface/user.interface'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('user')
@ApiTags('用户模块')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: '用户进行注册',
  })
  async create(@Body() userDto: User) {
    return await this.userService.create(userDto)
  }
}
