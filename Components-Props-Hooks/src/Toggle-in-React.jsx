import { useState } from "react";
import User from "./User";

export const Toggle = () => {

    const [display,setDisplay] = useState(true);

    function handleImg(){
        setDisplay(!display);
    }

    return (
        <div>
            {display? <User />: false}
            <button onClick={handleImg}>Toggle</button>
        </div>
    );
}