import React from 'react'
import Ingredient from './Ingredients/ingredient'

import classes from './burger.sass'

const burger = ( props ) => {
	return (
 		<div className={classes.burger}>
 			<Ingredient type='bread-top'/>
 			<Ingredient type='cheese'/>
 			<Ingredient type='meat'/>
 			<Ingredient type='bread-bottom'/>
 		</div>
	)
}

export default burger