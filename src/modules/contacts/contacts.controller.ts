import { Body, Controller, Param, Post, Query, Get, Delete, Patch, HttpCode } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post("")
  create(@Body() createContactDto:CreateContactDto){
    return this.contactsService.create(createContactDto)
  }

  @Get(":id")
  findOne(@Param("id") id: string){
    return this.contactsService.findOne(id)
  }


  @Get("")
  findAll(@Query("group") group: string | undefined){
    return this.contactsService.findAll(group)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto){
    return this.contactsService.update(id, updateContactDto)
  }

  @HttpCode(204)
  @Delete(":id")
  delete(@Param("id") id: string){
    return this.contactsService.remove(id)
  }
}
