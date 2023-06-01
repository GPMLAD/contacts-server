import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact> 
  abstract findOne(id: string): Promise<Contact | undefined> 
  abstract findAll(group: string | undefined): Promise<Contact[] | object>
  abstract update(contactID: string,data: UpdateContactDto): Promise<Contact> 
  abstract delete(contactId: string): Promise<void>
}