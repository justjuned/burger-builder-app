import React from 'react'

import classes from './control.sass'

const control = ( props ) => {

	return (

		<div className={classes.control}>
			<div className={classes.label}>{props.label}</div>
			<button
				className={classes.less}
				onClick={props.remove}
				disabled={props.disabled}>Less</button>
			<button
				className={classes.more}
				onClick={props.add}>More</button>
		</div>

	)
}

export default control