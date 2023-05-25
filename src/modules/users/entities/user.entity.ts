import { randomUUID } from "crypto"

export class User {
  readonly id: string
  full_name: string
  email: string
  phone: string
  password: string
  readonly register: string

  constructor(){
    this.id = randomUUID()
    this.register = new Date(Date.now()).toLocaleDateString()
  }
}
