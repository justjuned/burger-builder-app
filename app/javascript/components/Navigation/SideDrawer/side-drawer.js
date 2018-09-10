import React from 'react'
import Logo from '../../Logo/logo'
import Items from '../Items/items'
import Backdrop from '../../UI/Backdrop/backdrop'

import classes from './side-drawer.sass'

const sideDrawer = ( props ) => {

	let attachClasses = [classes.sideDrawer, classes.close]

	if(props.pop)
		attachClasses = [classes.sideDrawer, classes.open]

	return(
		<React.Fragment>
			<Backdrop pop={props.pop} closeModal={props.close} />
			<div className={attachClasses.join(' ')}>
				<div className={classes.logo}>
					<Logo />
				</div>
				<nav>
					<Items />
				</nav>
			</div>
		</React.Fragment>
	)
}

export default sideDrawer