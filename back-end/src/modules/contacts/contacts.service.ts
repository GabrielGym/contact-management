import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    return await this.contactsRepository.create(createContactDto, userId);
  }

  async findAll(userId: string) {
    return await this.contactsRepository.findAll(userId);
  }

  async findOne(id: string) {
    return await this.contactsRepository.findOne(id);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return await this.contactsRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    return await this.contactsRepository.delete(id);
  }
}
