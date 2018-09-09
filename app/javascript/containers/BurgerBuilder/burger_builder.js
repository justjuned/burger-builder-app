/*###################################################################################################
	### NOTE: Define As An Stateful Component Cause We Need To Play Around With Our State From Here.###
	###################################################################################################
*/
import React from 'react'
import Burger from '../../components/Burger/burger'
import Controls from '../../components/Burger/BuildControls/controls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary'

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
		totalPrice: 4,
		purchasing: false,
		purchasable: false
	}

	updatePurchaseState = ( ingredients ) => {
		const sum = Object.values(ingredients)
			.reduce((sum, el) => sum+el, 0)

		this.setState({purchasable: sum > 0})
	}

	addIngredientHandler = ( type ) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
		this.updatePurchaseState(updatedIngredients)
	}

	removeIngredientHandler = ( type ) => {
		const oldCount = this.state.ingredients[type];
		if ( oldCount <= 0 ) {
	    return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
		this.updatePurchaseState(updatedIngredients)
	}

	purchaseHandler = () => (
		this.setState({
			purchasing: true,
			// purchasable: false
		})
	)

	purchaseCloseHandler = () => (
		this.setState({purchasing: false})
	)

	purchaseContinueHandler = () => (
		alert('You can continue!')
	)

	render() {
		const disabledInfo = {
	    ...this.state.ingredients
		};

		for ( let key in disabledInfo ) {
	    disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<React.Fragment>
				<Modal pop={this.state.purchasing} closeModal={this.purchaseCloseHandler}>
					<OrderSummary
						price={this.state.totalPrice}
						ingredients={this.state.ingredients}
						voidPurchase={this.purchaseCloseHandler}
						continuePurchase={this.purchaseContinueHandler} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<Controls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					ordering={this.purchaseHandler}
					purchasable={this.state.purchasable} />
			</React.Fragment>
		)
	}
}

export default BurgerBuilder;