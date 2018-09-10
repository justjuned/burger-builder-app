import React from 'react'

import classes from './item.sass'

const item = ( props ) => (
	<React.Fragment>
		<li className={classes.item}>
			<a
				href={props.link}
				className={props.active ? classes.active : null }>
					{props.children}
			</a>
		</li>
	</React.Fragment>
)

export default item