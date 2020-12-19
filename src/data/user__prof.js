import userPet from '../data/user__pet';

class UserData {
  constructor(logIn, password, name, soname, lastName, age, logo, reiting, petitonCount) {
    this.logIn = logIn;
    this.password = password;
    this.name = name;
    this.soname = soname;
    this.lastName = lastName;
    this.age = age;
    this.logo = logo;
    this.reiting = reiting;
    this.petitonCount = petitonCount;
  }

  fullName() {
    return (this.soname + ' ' + this.name + ' ' + this.lastName) ;
  }

}



const user = new UserData(null, null, 'Ivan', 'Ivanov', 'Ivanich', '14.04.1999', null, '4', userPet.length);
export default user;