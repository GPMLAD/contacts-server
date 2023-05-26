import { randomUUID } from "crypto"

export class Contact {
  readonly id: string
  full_name: string
  nickname: string
  email: string
  phone: string
  country: string

  readonly added: string

  user_id?: string

  constructor(){
    this.id = randomUUID()
    this.added = new Date(Date.now()).toLocaleDateString()
  }
}