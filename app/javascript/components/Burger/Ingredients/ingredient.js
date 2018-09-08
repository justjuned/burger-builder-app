/*######################################################################################################
	### NOTE: Simply Define As An Stateful Component Cause We Need To Set Prop Types through PropTypes.###
	######################################################################################################
*/

import React from 'react'
import PropTypes from 'prop-types'

import classes from './ingredient.sass'

class Ingredient extends React.Component {

	render(){
		let ingredients = ''

		switch(this.props.type) {
			case('bread-bottom'):
				ingredients = <div className={classes.BreadBottom}></div>;
				break;
			case('bread-top'):
				ingredients = (
					<div className={classes.BreadTop}>
						<div className={classes.Seeds1}></div>
						<div className={classes.Seeds2}></div>
					</div>
				)
				break;
			case('meat'):
				ingredients = <div className={classes.Meat}></div>;
				break;
			case('cheese'):
				ingredients = <div className={classes.Cheese}></div>;
				break;
			case('salad'):
				ingredients = <div className={classes.Salad}></div>;
				break;
			case('bacon'):
				ingredients = <div className={classes.Bacon}></div>;
				break;
			default:
				ingredients = null;
		}

		return ingredients
	}
}

Ingredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default Ingredient