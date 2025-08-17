function User({ name = "New User" }) {

    let path = "https://www.shutterstock.com/image-vector/july-3-2023-vector-illustration-600nw-2326749515.jpg";

    let image = {
        height: "140px",
        width: "140px",
        borderRadius: "50%",
        marginTop:"5px"

    };
    let imgContainer = {
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        backgroundColor: "red"
    };
    let container = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }

    return (
        <div style={container}>
            <h1>Hi, {name}</h1>
            <div style={imgContainer}>
                <img style={image} src={path} />
            </div>
        </div>
    );
}

export default User;