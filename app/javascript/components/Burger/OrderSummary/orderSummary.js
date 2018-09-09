import React from 'react'
import Button from '../../UI/Button/button'


const orderSummary = ( props ) => {

	const ingredientSummary = Object.keys(props.ingredients)
		.map(key =>{
			return (
				<li key={key}>
					<span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
				</li>
			)
		})

	return(
		<React.Fragment>
			<h3>Your Order</h3>
			<div>A delicious burger with the following ingredients:</div>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Countine to Checkout?</p>
			<Button btnType='success' clicked={props.voidPurchase}>CANCEL</Button>
			<Button btnType='danger' clicked={props.continuePurchase}>CONTINUE</Button>
		</React.Fragment>
	)
}

export default orderSummary