import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  async compare(value: string | Buffer, hashedValue: string) {
    return await bcrypt.compare(value, hashedValue);
  }

  async createSecureHash(value: string | Buffer) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(value, salt);
  }
}
