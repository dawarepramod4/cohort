import { useEffect, useState } from "react";
import axios from "axios";
import swrfetch from "swr";
import useSWR from "swr";
//custom hook
// function useTodos(n) {
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const value = setInterval(() => {
//             axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//                 setTodos(res.data.todos);
//                 setLoading(false);
//             });
//         }, 5000);

//         axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//             setTodos(res.data.todos);
//             setLoading(false);
//         });

//         //cleanup
//         return () => {
//             clearInterval(value);
//         };
//     }, [n]);

//     return [todos, loading];
// }

async function fetcher(url) {
    const data = await fetch(url);
    const json1 = await data.json();
    console.log(json1.todos);
    return json1.todos;
}

function App() {
    // const [todos, loading] = useTodos(5);
    const { todos, error, loading } = useSWR("https://sum-server.100xdevs.com/todos", fetcher);

    return <>{!loading ? <></> : <div>sdf dfdf dsfd fdsf s fsd fsfsd fsdf s fsLoading...</div>}</>;
}

function Track({ todo }) {
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
        </div>
    );
}

export default App;
