/* eslint-disable prettier/prettier */
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactsRepository {
  abstract create(data, userId: string): Promise<Contact> | Contact;
  abstract findAll(userId: string): Promise<Contact[]> | Contact[];
  abstract findOne(id: string): Promise<Contact | undefined> | Contact | undefined;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
  abstract delete(id: string): Promise<void> | void;
}
