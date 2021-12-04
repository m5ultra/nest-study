import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../interface/user.interface'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  async create(user: User) {
    return this.userModel
      .find({ phone: user.phone })
      .then((res) => {
        if (res.length !== 0) {
          console.log('用户已经注册')
          throw Error('用户已经注册')
        }
      })
      .then(() => {
        try {
          const createUser = new this.userModel(user)
          return createUser.save()
        } catch (e) {
          throw Error('保存用户失败' + e)
        }
      })
  }
}
