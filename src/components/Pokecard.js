import React from "react";

function Pokecard({id, name, type, exp}) {
	const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${generateUrlId(id)}.png`

	function generateUrlId(id) {
		let urlId = `${id}`;

		while (urlId.length < 3) {
			urlId = "0" + urlId
		}

		return urlId;
	}

	return(
		<div>
			<h2>{name}</h2>
			<img src={pokemonImage} alt={`Image of ${name}`}/>
			<p>Type: {type}</p>
			<p>EXP: {exp}</p>
		</div>
	);
}

export default Pokecard;