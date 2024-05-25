import Image from "next/image";
import AppBar from "../components/AppBar";
import { Session } from "./providers";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">

    // </main>
    <Session>
      <div className="div">
        <AppBar />
      </div>
    </Session>
  );
}
