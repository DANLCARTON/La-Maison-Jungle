import "../styles/Banner.css"
import logo from '../assets/logo.webp'
import Recommendation from "./Recommendation"

const Banner = () => {
    return <div className="lmj-header">
    
        <div className="lmj-banner">
            <img src={logo} alt="La maison jungle" className="lmj-logo" />
            <h1 className="lmj-title">LA MAISON JUNGLE</h1>
        </div>
        
        <Recommendation />

    </div>
}

export default Banner