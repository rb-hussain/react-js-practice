import MainHeading from "../content/MainHeading";
import CardsBox from "./CardsBox";
import "./card.css";
import Sdata from "../cards/CardsCotent";
export default function Cards(){
    const cardsBoxMap = Sdata.map( (value, i)=>{
        return(
            
        
            <CardsBox key={i}
            cardImg={value.cimage} 
            cardTitle={value.ctitle} 
            cardSubTitle={value.cname} 
            cardLink={value.clink} 
            cardBtn={value.btnTxt}
            />
        )
    });
    return(
        <>
        <MainHeading title={"NetFlix Top 5 Series"}/>
        <div className="container">
            {/* 
            METHOD ONE
            <div className="row">
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Seriess"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/>  
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Series"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/> 
              <CardsBox cardImg={wed} cardTitle={"WEDNESDAY"} cardSubTitle={"A Orignal Netflix Series"} cardLink={"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23"} cardBtn={"Watch Now"}/> 
            </div> */}

            
             {/* Method Two With the help Of Array  OPEN */}
            {/* <div className="row">
            <CardsBox 
            cardImg={Sdata[0].cimage} 
            cardTitle={Sdata[0].ctitle} 
            cardSubTitle={Sdata[0].cname} 
            cardLink={Sdata[0].clink} 
            cardBtn={Sdata[0].btnTxt}
            />
            
            <CardsBox cardImg={Sdata[1].cimage} 
            cardTitle={Sdata[1].ctitle} 
            cardSubTitle={Sdata[1].cname} 
            cardLink={Sdata[1].clink} 
            cardBtn={Sdata[1].btnTxt}
            />  

            <CardsBox 
            cardImg={Sdata[2].cimage} 
            cardTitle={Sdata[2].ctitle} 
            cardSubTitle={Sdata[2].cname} 
            cardLink={Sdata[2].clink} cardBtn={Sdata[2].btnTxt}
            />  
            </div> */}
            {/* Method Two With the help Of Array END  */}

             {/* Method Three With the help Of Array.Map Start  */}

            {/* <div className="row">
        
            <CardsBox 
            cardImg={Sdata[0].cimage} 
            cardTitle={Sdata[0].ctitle} 
            cardSubTitle={Sdata[0].cname} 
            cardLink={Sdata[0].clink} 
            cardBtn={Sdata[0].btnTxt}
            />
            </div> */}
             {/* Method Two With the help Of Array.Map Close  */}
             <div className="row">
            {cardsBoxMap}
            </div>
        </div>
        </>
    );
}