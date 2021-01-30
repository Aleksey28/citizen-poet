class User {
  name = ''
  lastName = ''
  soname = ''
  email = ''
  age = ''
  logIn = ''
  password = ''
  reiting = ''
  petition = ``
  constructor() {
  }

  fullName() {
    return `${this.name}  ${this.soname} ${this.lastName}`
  }
}

let newUser = new User()

export default newUser;
