/* eslint-disable prettier/prettier */
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findOne(userId: string): Promise<User | undefined>;
  abstract findByEmail(email: string): Promise<User>;
  abstract update(userId: string, data: UpdateUserDto): Promise<User> | User;
  abstract delete(userId: string): Promise<void>;
}
