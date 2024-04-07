import './App.css'

interface Person{
  name:string,
  age:number,
  greet(phrase:string):string
}

class Employee implements Person{
  name: string;
  age: number;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  greet(phrase:string){
    return `${phrase}, ${this.name}`;
  }
}

const Employee1 = new Employee('John', 30);
console.log(Employee1.greet('Hello'));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    </>
  )
}

//types and interface
type PersonType = {
  name:string,
  age:number,
}

interface Manager{
  name:string,
  age:number,
  department:string
}

type EmployeeType = PersonType & Manager;
const t:EmployeeType = {
  name: 'John',
  age: 30,
  department: 'Engineering'
}

console.log(t);
// type numArray = number[];

// function sampleFunction(x:numArray){
//   return x.map((x) => x * 2);
// }



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
  Up,//0
  Down,//1
  Left,//2
  Right//3
}

function move(direction:Direction){
  return direction;
}

move(Direction.Up);


export default App

