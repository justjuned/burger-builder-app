import React from 'react'
import Control from './Control/control'

import classes from './controls.sass'

const CONTROLS = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'}
]

const controls = ( props ) => {

	return(
		<div className={classes.controls}>
			{CONTROLS.map(ctrl =>(
				<Control
					key={ctrl.label}
					label={ctrl.label}
					add={() => props.addIngredient(ctrl.type)}
					remove = {() => props.removeIngredient(ctrl.type)}
					disabled={props.disabled[ctrl.type]} />
			))}
		</div>
	)
}

export default controls