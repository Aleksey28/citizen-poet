class UserData {
  constructor(name, soname, lastName, age, logo, reiting) {
    this.name = name;
    this.soname = soname;
    this.lastName = lastName;
    this.age = age;
    this.logo = logo;
    this.reiting = reiting;
  }

  fullName() {
    return `${this.soname} ${this.name} ${this.lastName}`;
  }

}



const user = new UserData('Ivan', 'Ivanov', 'Ivanich', '14.04.1999', null, '4');
export default user;