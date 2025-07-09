export default function Price({oldPrice,newPrice}){
    return(
        <div className="rounded-b-2xl flex justify-center items-center h-[50px] w-[150px] bg-[#e0c367]">
            <span className="line-through">{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span className="font-bold">{newPrice}</span>
        </div>
    );  
}