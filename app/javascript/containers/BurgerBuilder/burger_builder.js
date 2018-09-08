/*###################################################################################################
	### NOTE: Define As An Stateful Component Cause We Need To Play Around With Our State From Here.###
	###################################################################################################
*/
import React from 'react'
import Burger from '../../components/Burger/burger'
import Controls from '../../components/Burger/BuildControls/controls'

const INGREDIENTS_PRICES = {
	salad: 0.3,
	meat: 1.7,
	bacon: 0.7,
	cheese: 1.1
}

class BurgerBuilder extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
	    ...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );

	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if ( oldCount <= 0 ) {
	    return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
	    ...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
	}

	render() {
		const disabledInfo = {
	    ...this.state.ingredients
		};

		for ( let key in disabledInfo ) {
	    disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients} />
				<Controls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice} />
			</React.Fragment>
		)
	}
}

export default BurgerBuilder;