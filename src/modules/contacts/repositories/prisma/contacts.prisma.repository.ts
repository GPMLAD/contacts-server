import { Injectable } from "@nestjs/common";
import { ContactsRepository } from "../contact.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository{
  constructor( private prisma: PrismaService){
  }

  private groupBy(contacts: Contact[], key: string){
    return contacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur)
      return acc
    }, {})

  }
  
  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new Contact()
    Object.assign(contact, {...data})

    console.log(contact)

    const newContact = await this.prisma.contact.create({
      data:{
        ...contact
      }})

    return newContact
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({where: {id}})
    return plainToInstance(Contact, contact)
  }
  
  async findAll(group: string): Promise<object | Contact[]> {
    const contacts = await this.prisma.contact.findMany()
    if(group){
      return this.groupBy(contacts, group)
    }
    return contacts
  }

  async update(contactID: string, data: UpdateContactDto): Promise<Contact> {
    const contactUpdated = await this.prisma.contact.update({where: {id: contactID},
    data: {...data}})

    return contactUpdated
  }
  async delete(contactId: string): Promise<void> {
    await this.prisma.contact.delete({where:{id:contactId}})
    return
  }

}