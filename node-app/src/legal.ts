interface User{
  firstName: string;
  lastName: string;
  age: number;
  email?:string

}

function isLegal2(user:User):boolean {
  if(user.age < 18){
    return true;
  }else{
    return false;
  }
}

function greet(user:User):string {
  return `Hello, ${user.firstName} ${user.lastName}!`;
}

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 17
};

const c = isLegal2(user);