import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  async findOne(userId: string) {
    const findUser = await this.usersRepository.findOne(userId);
    return findUser;
  }

  async findByEmail(email: string) {
    const findUser = await this.usersRepository.findByEmail(email);

    return findUser;
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(userId);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return this.usersRepository.update(userId, updateUserDto);
  }

  async remove(userId: string) {
    const findUser = await this.usersRepository.findOne(userId);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return this.usersRepository.delete(userId);
  }
}
