import './cardtwo.css'
const Cardtwo = (props)=>{
    return(
        <div className={'card-C'}>
            <div className={'img'}>
                <img alt={''} src={props.img}/>
            </div>
            <div className={'title'}>
                <span>
                    {props.title}
			    </span>
            </div>
            <div className={'prix'}>
                <span>{props.price}</span>
            </div>
            <div className={'bouton'}>
                <div className={'btn-detail'}>
                    <span>Détails</span>
                </div>
                <div className={'btn-achat'}>
                    <span>Acheter</span>
                </div>
            </div>
        </div>
    )
}
export default Cardtwo;