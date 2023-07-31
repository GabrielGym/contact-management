import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  create(createContactDto: CreateContactDto) {
    return this.contactsRepository.create(createContactDto);
  }

  findAll() {
    return this.contactsRepository.findAll();
  }

  findOne(id: string) {
    return this.contactsRepository.findOne(id);
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactsRepository.update(id, updateContactDto);
  }

  remove(id: string) {
    return this.contactsRepository.delete(id);
  }
}
