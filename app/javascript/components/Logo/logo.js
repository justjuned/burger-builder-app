import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'

import classes from './logo.sass'

const logo = ( props ) =>(
	<div className={classes.logo}>
		<img src={burgerLogo} alt='BurgerLogo' />
	</div>
)

export default logo