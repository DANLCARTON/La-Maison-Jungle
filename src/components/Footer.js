import { useEffect, useState } from 'react'
import '../styles/Footer.css'

const handleBlur = (value) => {
    if (!value.includes("@")) alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse email valide.")
}

function Footer() {
	const [inputValue, setInputValue] = useState('nom@domaine.ext')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'> Pour les passionné·e·s de plantes 🌿🌱🌵 </div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type="email" name="user_email" onChange={(e) => setInputValue(e.target.value)} onBlur={() => handleBlur(inputValue)}/>
            <button onClick={() => console.log(inputValue)}>Console.log</button>
		</footer>
	)
}

export default Footer