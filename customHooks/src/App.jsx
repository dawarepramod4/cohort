import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Mycomponent />
        </>
    );
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
