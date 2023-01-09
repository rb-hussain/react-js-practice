import wed from './cardsImg/wed.jpeg';

export default function CardsBox(props){
    return(
        <>
        <div className="col-sm-4 d-flex mt-4 mb-4">
            <div className="card_body justify-content-center py-4 px-4 ">
                <div className="cus_card">
                    <div className="card_img d-flex justify-content-center">
                    <img src={props.cardImg} />
                    </div>
                    <div className="cardContent text-center py-4">
                        <span className="subTitle"><h5>{props.cardTitle}</h5></span>
                        <span className="title "><h3>{props.cardSubTitle}</h3></span>
                    </div>
                    <div className="watchNow d-flex justify-content-center pb-4 ">
                    <button  variant="dark" className="px-4 py-2"> <a href={props.cardLink} target="_blank">{props.cardBtn}</a></button>
                    
                    </div>
                </div>
            </div>   
        </div>
        </>
    );
}