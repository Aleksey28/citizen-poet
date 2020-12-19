import userPet from '../data/user__pet';

class UserData {
  constructor(statusLogIn, logIn, password, name,  soname, lastName, email, age, logo,
     reiting, petitonCount) {
    this.statusLogIn = statusLogIn;
    this.logIn = logIn;
    this.password = password;
    this.name = name;
    this.soname = soname;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.logo = logo;
    this.reiting = reiting;
    this.petitonCount = petitonCount;
  }

  fullName() {
    return (this.soname + ' ' + this.name + ' ' + this.lastName) ;
  }

}



const user = new UserData(false, '123', '123', 'Ivan', 'Ivanov', 'Ivanich', 'abra@abra.ri',
 '14.04.1999', null, '4', userPet.length);

export default user;