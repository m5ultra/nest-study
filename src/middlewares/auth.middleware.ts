import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { addSalt, encryption } from '../utils/encryption'

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['password']
    const salt = addSalt()
    if (userPassword) {
      userPassword = encryption(userPassword, addSalt())
      req.body['password'] = userPassword
      req.body['salt'] = salt
    }
    console.log(`this is auth mi${JSON.stringify(req.body)}`)
    next()
  }
}
