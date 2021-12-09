import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoService } from '../crypto/crypto.service';
import { UserSource } from './user-source';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private cryptoService: CryptoService,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createLocalUser(
    email: string,
    password: string,
    firstname?: string,
    lastname?: string,
  ): Promise<User> {
    const hashedPassword = await this.cryptoService.createSecureHash(password);
    const user = new User({
      email,
      userSource: UserSource.LOCAL,
      firstname,
      lastname,
      hashedPassword,
    });
    return this.userRepository.save(user);
  }
}
