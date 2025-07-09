function handleForm(){
    console.log("Form was Submited!");
}

export default function Form(){
    return (
        <form>
            <input type="text" />
            <button onClick={handleForm}></button>
        </form>
    );
}