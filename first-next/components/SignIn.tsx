import Image from "next/image";

export function SignIn() {
  return (
  <div className="w-screen flex items-center justify-center h-screen">
   <div className="card w-96 shadow-md  border border-slate-500  self-center rounded-lg bg-slate-800 ">
    <div className="flex flex-col items-center justify-center   ">
      <div className="text-lg font-bold my-5 text-white">Sign In</div>
      <input className="border rounded-md p-1 my-5 bg-slate-700 text-white border-slate-500" type="text" placeholder="userName" />
      <input className="border rounded-md p-1 mb-5 bg-slate-700 text-white border-slate-500" type="password" placeholder="password" />
      <button className="bg-blue-500 text-white rounded-md p-1 px-2 mb-5">Sign In</button>


    </div>

   </div>
  </div>
  );
}
