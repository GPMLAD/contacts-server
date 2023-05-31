import { randomUUID } from "crypto"

export class Contact {
  readonly id: string
  full_name: string
  nickname: string | null
  email: string | null
  phone: string | null
  country: string | null

  readonly added: string

  user_id: string

  constructor(){
    this.id = randomUUID()
    this.added = new Date(Date.now()).toLocaleDateString()
  }
}