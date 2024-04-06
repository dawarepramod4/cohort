import React, { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(id);
        };
    }, [value, delay]);

    return debouncedValue;
}

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 1000); // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
            />
            <>{debouncedValue}</>
        </>
    );
};

export default App;
