import { useState } from "react";
const Counter = () => {
    
    const [count, setCount] = useState(0);
    const [rcount, setRcount] = useState(10);

    let handleCount = () => {
        setCount(count+1);
    }

    let handleRcount = () => {
        setRcount(rcount-1);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>grow</button>
            <h1>{rcount}</h1>
            <button onClick={handleRcount}>dec</button>
        </div>
    );
}

export default Counter;