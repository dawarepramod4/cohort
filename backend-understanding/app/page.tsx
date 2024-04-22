import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const userDetails = await getData();

  return (
   <div>
    Hi there
    {userDetails.name}
   </div>
  );
}

async function getData(){
  const response =await axios.get('http://localhost:3000/api/user');
  return response.data;
}