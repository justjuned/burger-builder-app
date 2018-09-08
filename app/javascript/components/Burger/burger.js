import React from 'react'
import Ingredient from './Ingredients/ingredient'

import classes from './burger.sass'

const burger = ( props ) => {

	let middleIngredients = Object.keys(props.ingredients)
		.map(key => {
			return [...Array( props.ingredients[key] )].map((_, index) => {
				return <Ingredient key={key+index} type={key} />;
			})
		}).reduce((arr, el) => arr.concat(el), [])

	if(middleIngredients.length === 0)
		middleIngredients = <p>Please start adding ingredients!</p>;


	return (
 		<div className={classes.burger}>
 			<Ingredient type='bread-top'/>
 			{middleIngredients}
 			<Ingredient type='bread-bottom'/>
 		</div>
	)
}

export default burger