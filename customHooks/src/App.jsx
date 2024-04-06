import "./App.css";
import React from "react";

function isOnline() {
    return navigator.onLine;
}

function useIsOnline() {
    const [online, setOnline] = React.useState(isOnline());
    React.useEffect(() => {
        const handler = () => setOnline(isOnline());
        window.addEventListener("online", handler);
        window.addEventListener("offline", handler);
        return () => {
            window.removeEventListener("online", handler);
            window.removeEventListener("offline", handler);
        };
    }, []);
    return online;
}

export default function App() {
    const online = useIsOnline();
    if (online) console.log("Online");
    else console.log("Offline");

    return <h1>am i Online : {online == true ? <>true</> : <>false</>}</h1>;
}
