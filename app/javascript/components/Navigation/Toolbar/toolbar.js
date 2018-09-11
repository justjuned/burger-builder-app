import React from 'react'
import Logo from '../../Logo/logo'
import Items from '../Items/items'
import DrawerToggler from '../SideDrawer/DrawerToggler/drawer-toggler'
import classes from './toolbar.sass'

const toolbar = ( props ) => (
	<header className={classes.toolbar}>
		<DrawerToggler toggler={props.toggler} />
		<div className={classes.logo}>
			<Logo />
		</div>
		<nav className={classes.desktopOnly}>
			<Items />
		</nav>
	</header>
)

export default toolbar