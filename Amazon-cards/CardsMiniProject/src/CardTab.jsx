import Card from "./Card";

function CardTab() {

  return (
    <div>
      <div className="text-[28px] mb-[9px] mt-[200px] flex justify-center">
        <h3>Blockbuster Deals | Shop Now</h3>
      </div>
   
      <div className="flex flex-wrap justify-center items-center">
        <Card title="Logitech MX Master" idx={0}/>
        <Card title="Apple Pencil (2nd Gen)" idx={1}/>
        <Card title="Zebronic transformer" idx={2}/>
        <Card title="Petronics Toad 23" idx={3}/>
      </div>
    </div>
  )
}

export default CardTab
