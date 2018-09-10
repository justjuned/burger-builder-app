import React from 'react'
import classes from './layout.sass'
import Toolbar from '../Navigation/Toolbar/toolbar'
import SideDrawer from '../Navigation/SideDrawer/side-drawer'

class Layout extends React.Component {
	state = {
		showSideDrawer: true,
	}

	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer: false})
	}

	render(){
		return(
			<React.Fragment>
				<Toolbar />
				<SideDrawer pop={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
				<main className={classes.content}>
			    {this.props.children}
				</main>
			</React.Fragment>
		)
	}
}

export default Layout