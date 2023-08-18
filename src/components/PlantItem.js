import CareScale from "./CareScale"
import "../styles/PlantItem.css"

const handleClick = (name) => {
    alert("Voulez-vous acheter 1 "+name+" ?")
}

const PlantItem = ({name, cover, id, light, water, bestSale, isSpecialOffer}) => {

    return <div className="lmj-plant-item" onClick={() => handleClick(name)}>
        <img src={cover} alt={name} className="lmj-plant-item-cover" />
        {name} 
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
        {bestSale && <div className="lmj-best-sales">Meilleures ventes !</div>}
        {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
    </div>
}

export default PlantItem