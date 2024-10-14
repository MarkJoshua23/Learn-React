import Card from "./Card";

function BodyCard(){
    return(
        <div className="grow grid grid-cols-responsive gap-2 m-5">     
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    );
}

export default BodyCard;