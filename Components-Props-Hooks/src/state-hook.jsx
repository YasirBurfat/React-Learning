import { useState } from "react";
export function StateHook() {

    let Fruits = ['apple', 'banana', 'mango', 'orange'];
    let Students = ['yasir', 'mukhtiar', 'amir', 'jameel'];

    const [idx, setIdx] = useState(0);
    const [Sidx, setSidx] = useState(0);

    function handleStudents() {
        if (Sidx > Students.length - 2) {
            alert("these are all your students!!");
            setSidx(0);
        }
        else {
            setSidx(Sidx + 1);
        }
    }

    function handleFruit() {    
        if (idx > Fruits.length - 2) {
            alert("Emptied");
            setIdx(0);
        }
        else
            setIdx(idx + 1);
    }

    return (
        <div>
            <h1>{Fruits[idx]}</h1>
            <button onClick={handleFruit}>Change Fruit</button>

            <h1>{Students[Sidx]}</h1>
            <button onClick={handleStudents}>Change Students</button>
        </div>
    );
}