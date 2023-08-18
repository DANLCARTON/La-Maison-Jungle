import { plantList } from '../datas/plantList'
import "../styles/Category.css"

const Category = ({category, selectCategory}) => {

    const categories = plantList.reduce((cat, val) => cat.includes(val.category) ? cat : cat.concat(val.category), []) // le reduce qui permet d'avoir la liste des categories

    return <div className="lmj-category">
        <label for="cat-select">Choisissez une catégorie : </label>
        <select name="cat" id="cat-select" onChange={(e) => selectCategory(e.target.value)}> {/* On met à jour category grace à selectCategory, on lui passe en paramètre la valur du select */}
            <option value="">Toutes</option>
            {categories.map((categoryMapped) => (
                <option key={categoryMapped} value={categoryMapped}>{categoryMapped}</option>
            ))}
        </select>
        <button onClick={() => selectCategory("")}>Réinitialiser</button>
    </div>
}

export default Category