import { useState } from 'react'

const QuestionForm = () => {   
    const [inputValue, setInputValue] = useState('Posez votre question ici') // on utilise la notion de state ici mais on verra ça plus tard

    const checkValue = (value) => {
        if (!value.includes("f")) setInputValue(value);
    };

    return (
        <div>
            <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)} /> {/* setInputValue est la fonction qui permet de modifier le state local à chaque changement avec e.target.value*/}
            <button onClick={() => alert(inputValue)}>Alert</button>
        </div>
    )
}

export default QuestionForm