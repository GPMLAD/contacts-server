import { Injectable } from "@nestjs/common";
import { ContactsRepository } from "../contact.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository{
  private database: Contact[] = []

  private groupBy(contacts: Contact[], key: string){
    return contacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur)
      return acc
    }, {})

  }

  async create(data: CreateContactDto): Promise<Contact> {
    const newContact = new Contact()
    Object.assign(newContact,{
      ...data,
      nickname: data.nickname || null,
      country: data.country || null,
      email: data.email || null,  
      phone: data.phone || null
    })
    this.database.push(newContact)
    return newContact
  }
  async findOne(id: string): Promise<Contact> {
    const contact = this.database.find(contact => contact.id == id)
    return contact
  }
  async findAll(group: string): Promise<object | Contact[]> {
    if (group){
      return this.groupBy(this.database, group)
    }
    return this.database
  }

  async update(id: string, data: UpdateContactDto ): Promise<Contact> {
    const contactIndex = this.database.findIndex(contact => contact.id == id)
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data
    }
    return plainToInstance(Contact,this.database[contactIndex])
  }

  async delete(id: string): Promise<void> {
    const contactIndex = this.database.findIndex(contact => contact.id == id)
    this.database.splice(contactIndex,1)
  }
  
}