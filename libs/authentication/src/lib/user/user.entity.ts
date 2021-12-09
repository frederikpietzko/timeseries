import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserSource } from './user-source';
import 'reflect-metadata';

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
}
