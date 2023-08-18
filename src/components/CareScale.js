const handleClick = (careType, scaleValue) => {
    let careString = ""
    careType === "light" ? careString = "de lumière" : careString = "d'arrosage"
    let scaleString = ""
    switch (scaleValue) {
        case(1):
            scaleString = "de très peu"
            break;
        case(2):
            scaleString = "d'assez peu"
            break;
        case(3):
            scaleString = "de légèrement peu"
            break;
        case(4):
            scaleString = "de peu"
            break;
        case(5):
            scaleString = "de légèrement beaucoup"
            break;
        case(6):
            scaleString = "d'assez beaucoup"
            break;
        case(7):
            scaleString = "de beaucoup"
            break;
        case(8):
            scaleString = "d'énormément"
            break;
    };
    alert ("Cette plante a besoin "+scaleString+" "+careString+".")
}

const CareScale = ({scaleValue, careType}) => {
    const scaleType = careType === "light" ? "🌞" : careType === "water" ? "💧" : null
    const range = [1, 2, 3, 4, 5, 6, 7, 8]
    return <div onClick={() => handleClick(careType, scaleValue)}>
        {range.map((rangeElem) => scaleValue >= rangeElem && scaleType)}
    </div>
}

export default CareScale