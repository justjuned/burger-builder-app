import React from 'react'

import classes from './backdrop.sass'

const backdrop = ( props ) => (
	props.pop ? <div className={classes.backdrop} onClick={props.closeModal}></div> : null
)

export default backdrop