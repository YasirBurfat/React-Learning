import Price from "./Price";

function Description({description, idx}){
    return(
        <div className="text-[white] w-[150px] flex flex-col justify-center items-center p-2 bg-[blue]">
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>{description[idx][2]}</p>
            <p>{description[idx][3]}</p>
        </div>
    );
}


function card({title, idx}) {

    let oldPrices = ["12,999","13,999","14,000","15,000"];
    let newPrices = ["10,000","12,000","12,000","12,500"];

    let description = [
        ["8,000 DPI", "5 Programmable"], 
        ["intuitive surface", "8,000 DPI"], 
        ["designed for ipad", "intuitive surface"], 
        ["wireless", "ipad Pro"]
    ];

    return (
        <div className="bg-[pink] flex flex-col justify-center items-center border w-[200px] h-[190px]  m-1.5 rounded-2xl ">
            <h4 className="rounded-t-2xl bg-[black] text-center text-[white] w-[150px] text-[17px]">{title}</h4>
            <Description idx={idx} description={description}/>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default card;