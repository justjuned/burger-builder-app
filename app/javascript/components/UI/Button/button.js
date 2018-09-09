import React from 'react'

import classes from './button.sass'

const button = ( props ) => (

	<React.Fragment>
		<button
			className={[classes.button, classes[props.btnType]].join(' ')}
			onClick={props.clicked}>
			{props.children}
		</button>
	</React.Fragment>
)

export default button