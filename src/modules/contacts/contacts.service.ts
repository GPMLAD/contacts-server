import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository){}

  async create(createContactDto: CreateContactDto, userId: string){
    const contact = await this.contactRepository.create(createContactDto, userId)
    return contact
  }

  async findOne(id: string){
    const contact = await this.contactRepository.findOne(id)
    return contact
  }

  async findAll(group: string | undefined){
    return await this.contactRepository.findAll(group)
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.update(id, updateContactDto)
    return contact
  }

  async remove(id: string) {
    await this.contactRepository.delete(id)
    return
  }

}
