import monstera from "../assets/monstera.webp"
import ficusLyrata from "../assets/ficus-lyrata.webp";
import pothosArgente from "../assets/pothos-argente.webp";
import yucca from "../assets/yucca.webp";
import olivier from "../assets/olivier.webp";
import geranium from "../assets/geranium.webp";
import basilique from "../assets/basilique.webp";
import aloe from "../assets/aloe.webp";
import succulente from "../assets/succulente.webp";

export const plantList = [
	{
		name: 'Monstera',
		category: 'Classique',
		id: '1ed',
        bestSale: true,
        water: 6,
        light: 7,
        cover: monstera,
		price: 29.85
	},
	{
		name: 'Ficus lyrata',
		category: 'Classique',
		id: '2ab',
        bestSale: false,
        water: 6,
        light: 5,
        cover: ficusLyrata,
		price: 57.50
	},
	{
		name: 'Pothos argenté',
		category: 'Classique',
		id: '3sd',
        bestSale: false,
		isSpecialOffer: true,
        water: 1,
        light: 2,
        cover: pothosArgente,
		price: 10.00
	},
	{
		name: 'Yucca',
		category: 'Classique',
		id: '4kk',
        bestSale: false,
        water: 4,
        light: 2,
        cover: yucca,
		price: 30.90
	},
	{
		name: 'Olivier',
		category: 'Extérieur',
		id: '5pl',
        bestSale: false,
        water: 1,
        light: 8,
        cover: olivier,
		price: 10135.00
	},
	{
		name: 'Géranium',
		category: 'Extérieur',
		id: '6uo',
        bestSale: false,
        water: 2,
        light: 1,
        cover: geranium,
		price: 12.95
	},
	{
		name: 'Basilique',
		category: 'Extérieur',
		id: '7ie',
        bestSale: true,
		isSpecialOffer: true,
        water: 1,
        light: 4,
        cover: basilique,
		price: 1524490.17
	},
	{
		name: 'Aloé',
		category: 'Plante grasse',
		id: '8fp',
        bestSale: false,
		isSpecialOffer: true,
        water: 8,
        light: 1,
        cover: aloe,
		price: 1.95
	},
	{
		name: 'Succulente',
		category: 'Plante grasse',
		id: '9vn',
        bestSale: false,
        water: 6,
        light: 7,
        cover: succulente,
		price: 3.50
	}
]