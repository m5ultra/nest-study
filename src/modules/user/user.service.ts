import { Injectable, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../interface/user.interface'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  private async fineOneByPhone(phone) {
    return this.userModel.find({ phone })
  }

  async create(user: User) {
    const userList = await this.fineOneByPhone(user.phone)
    // 找到了
    if (userList?.length !== 0) {
      throw new HttpException('用户名被注册', 409)
    } else {
      // 未找到保存注册信息到数据库
      try {
        return new this.userModel(user).save()
      } catch (e) {
        throw Error('保存用户失败' + e)
      }
    }
  }
}
