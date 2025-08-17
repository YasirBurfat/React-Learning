import { Children } from "react";

function Wrapper({children, children2}) {

    let image = {
        height: "140px",
        width: "140px",
        borderRadius: "50%",
        marginTop: "5px"
    };
    let imgContainer = {
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        backgroundColor: "red"
    };
    let container = {
        marginTop:"2rem",
        height: "150px",
        width: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color:"red",
        border:"2px solid green"
    }

    return (
        <div style={container}>
           {children}
            <div style={imgContainer}>
                {children2} 
            </div>
        </div>
    );
}

export default Wrapper;