import React from 'react'
import Item from './Item/item'

import classes from './items.sass'

const items = ( props ) => (
	<ul className={classes.items}>
		<Item link='/' active>Burger Builder</Item>
		<Item link='/'>Burger Builder</Item>
	</ul>
)

export default items