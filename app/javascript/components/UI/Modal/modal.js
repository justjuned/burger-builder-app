import React from 'react'
import Backdrop from '../Backdrop/backdrop'

import classes from './modal.sass'

class Modal extends React.Component {

	shouldComponentUpdate (nextProps, nextState) {
		return nextProps.pop !== this.props.pop
	}

	render() {
		return (
			<React.Fragment>
				<Backdrop pop={this.props.pop} closeModal={this.props.closeModal} />
				<div
					className={classes.modal}
					style={{
						transform: this.props.pop ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.pop ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</React.Fragment>
		)
	}
}

export default Modal