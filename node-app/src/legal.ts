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



//contrained set of type values
type Status = 'success' | 'error' | 'warning';

function getStatus(status:Status){
  return status;
}

getStatus('success');
getStatus('error');
//won't work
// getStatus('anything');



//enums
enum Direction{
  Up="UP",//
  Down="DOWN",//
  Left="LEFT",//2
  Right="RIGHT"//3
}

function move(direction:Direction){
  return direction;
}

move(Direction.Up);

type Input  = [number | string];
// type Input = number[] | string[];

function sampleFunction(x:Input){
  return x.map((x) => x);
}

sampleFunction(["string"]);

//generics
function sampleFunction2<T>(x:T){
  return x;
}

const as =sampleFunction2<string>("string");
let sb =sampleFunction2<number>(1);