import React from 'react'
import Burger from '../../components/Burger/burger'

class BurgerBuilder extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Burger />
				<div>Burger Contorls</div>
			</React.Fragment>
		)
	}
}

export default BurgerBuilder;