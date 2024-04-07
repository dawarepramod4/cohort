import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
  const [count, setCount] = useState(0)

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


type numArray = number[];

function sampleFunction(x:numArray){
  return x.map((x) => x * 2);
}





export default App

