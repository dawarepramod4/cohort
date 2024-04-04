import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RevenueCard from "./components/revenueCard";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="grid  grid-cols-1 md:grid-cols-5">
                <RevenueCard />
            </div>
        </>
    );
}

export default App;
