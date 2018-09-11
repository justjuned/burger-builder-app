import React from 'react'

import classes from './drawer-toggler.sass'

const drawerToggler = ( props ) => (
	<div className={classes.drawer_toggle} onClick={props.toggler}>
		<div></div>
		<div></div>
		<div></div>
	</div>
)

export default drawerToggler