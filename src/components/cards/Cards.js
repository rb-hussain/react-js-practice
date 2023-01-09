import MainHeading from "../content/MainHeading";
import CardsBox from "./CardsBox";
import "./card.css";
import wed from './cardsImg/wed.jpeg';
export default function Cards(){
    return(
        <>
        <MainHeading title={"NetFlix Top 5 Series"}/>
        <div className="container">
            <div className="row">
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Seriess"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/>  
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Series"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/> 
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Series"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/> 
            </div>
        </div>
        </>
    );
}