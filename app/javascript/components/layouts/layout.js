import React from 'react'

const layout = (props) => (
	<React.Fragment>
		<div>Toolbar, SideDrawer, backdrop</div>
		<main>
		    {props.children}
		</main>
	</React.Fragment>
)

export default layout;