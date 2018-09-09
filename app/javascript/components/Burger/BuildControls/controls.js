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
			<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
			{CONTROLS.map(ctrl =>(
				<Control
					key={ctrl.label}
					label={ctrl.label}
					add={() => props.addIngredient(ctrl.type)}
					remove = {() => props.removeIngredient(ctrl.type)}
					disabled={props.disabled[ctrl.type]} />
			))}
			<button
				className={classes.orderButton}
				disabled={!props.purchasable}
				onClick={props.ordering}>Place Order</button>
		</div>
	)
}

export default controls