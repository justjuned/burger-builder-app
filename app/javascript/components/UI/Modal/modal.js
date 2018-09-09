import React from 'react'
import Backdrop from '../Backdrop/backdrop'

import classes from './modal.sass'

const modal = ( props ) => (
	<React.Fragment>
		<Backdrop pop={props.pop} closeModal={props.closeModal} />
		<div
			className={classes.modal}
			style={{
				transform: props.pop ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.pop ? '1' : '0'
			}}>
			{props.children}
		</div>
	</React.Fragment>
)

export default modal