import * as crypto from 'crypto'

export function addSalt(): string {
  return crypto.randomBytes(3).toString('base64')
}

export function encryption(userPassword, salt): string {
  return crypto
    .pbkdf2Sync(userPassword, salt, 1000, 18, 'sha256')
    .toString('base64')
}
