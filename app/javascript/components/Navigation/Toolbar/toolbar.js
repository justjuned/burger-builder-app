import React from 'react'
import Logo from '../../Logo/logo'
import Items from '../Items/items'
import classes from './toolbar.sass'

const toolbar = ( props ) => (
	<header className={classes.toolbar}>
		<div>MENU</div>
		<div className={classes.logo}>
			<Logo />
		</div>
		<nav className={classes.desktopOnly}>
			<Items />
		</nav>
	</header>
)

export default toolbar