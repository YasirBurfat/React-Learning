import { useState } from "react";
function LikeBtnCounter(){

    const [count, setCounter] = useState(0);

    function liked(){
        setCounter(count+1);
    }

    let Style = {
        color:"red",
        backgroundColor:"yellow",
        cursor:"pointer"
    };

    return (
        <div>
            <p style={Style} onClick={liked}>Like {count}</p>
        </div>
    );
}

export default LikeBtnCounter;