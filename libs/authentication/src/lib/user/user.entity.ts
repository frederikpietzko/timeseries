import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserSource } from './user-source';
import 'reflect-metadata';
import { createParamDecorator } from '@nestjs/common';

interface UserCreationOptions {
  firstname?: string;
  lastname?: string;
  email: string;
  userSource: UserSource;
  hashedPassword?: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstname?: string;

  @Column()
  lastname?: string;

  @Column({ unique: false })
  email!: string;

  @Column({
    type: 'enum',
    enum: UserSource,
    default: UserSource.LOCAL,
    nullable: false,
  })
  userSource!: UserSource;

  @Column()
  password?: string;

  @Column({ default: false, nullable: false })
  isActive!: boolean;

  constructor(creationOptions?: UserCreationOptions) {
    if (creationOptions) {
      this.email = creationOptions.email;
      this.userSource = creationOptions.userSource;
      if (creationOptions.userSource === UserSource.LOCAL) {
        this.password = creationOptions.hashedPassword!;
      }
      if (creationOptions.firstname) {
        this.firstname = creationOptions.firstname;
      }
      if (creationOptions.lastname) {
        this.lastname = creationOptions.lastname;
      }
    }
  }
}
