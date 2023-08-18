import { plantList } from '../datas/plantList'
import "../styles/ShoppingList.css"
import PlantItem from './PlantItem'
import Category from './Category'
import { useState } from 'react'

const ShoppingList = ({cart, updateCart, category, selectCategory}) => { // je récupère les props de la categorie

    const addToCart = (name, price) => {
        const currentPlantAdded = cart.find((plant) => plant.name === name) 
        if (currentPlantAdded) { 
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name) 
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}]) 
        } else { 
            updateCart([...cart, {name, price, amount: 1}]) 
        }
    }

    return <div>
        <Category category={category} selectCategory={selectCategory} /> {/* Ici on a le composant Category avec le state qui passe par les props */}
        <ul className="lmj-plant-list">

            {category === "" ? ( // j'utilise ici un opérateur ternaire qui regarde si une catégorie est définie. si non (""), je fais un map de toutes les plantes.
                plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-list-element">
                        <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} bestSale={plant.bestSale} isSpecialOffer={plant.isSpecialOffer}/>
                        <button className="lmj-cart-add-button" onClick={() => addToCart(plant.name, plant.price)}>Ajouter au panier</button> {/* maintenant au clic on lance AddToCart */}
                    </li>
                ))
            ) : ( // si non, je filtre la liste des plantes pour qu'elle corresponde à la catégorie avant de faire un map sur la liste filtrée. 
                plantList.filter((plant) => plant.category === category).map((plant) => (
                    <li key={plant.id} className="lmj-plant-list-element">
                        <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} bestSale={plant.bestSale} isSpecialOffer={plant.isSpecialOffer}/>
                        <button className="lmj-cart-add-button" onClick={() => addToCart(plant.name, plant.price)}>Ajouter au panier</button> {/* maintenant au clic on lance AddToCart */}
                    </li>
                ))
            )}
        </ul>
    </div>
}

export default ShoppingList