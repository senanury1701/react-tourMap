import './Card.scss'
const Card = (data) => {
    const {title , image , desc} = data
    return (
        <div className="cards">
            <div className="cards-title">
                <h1>{ title }</h1>
            </div>
                <img src={image} alt="" />                
            <div className="cards-desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default Card