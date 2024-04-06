import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // const [count, setCount] = useState(0);
    const [render, setRender] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setRender(false);
        }, 3000);
    });
    return <>{render ? <Mycomponent /> : <div></div>}</>;
}
function Mycomponent() {
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        };
    });

    return <div>From inside the component</div>;
}
export default App;
