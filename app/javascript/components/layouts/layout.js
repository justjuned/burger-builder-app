import React from 'react'
import classes from './layout.sass'
import Toolbar from '../Navigation/Toolbar/toolbar'
import SideDrawer from '../Navigation/SideDrawer/side-drawer'

class Layout extends React.Component {
	state = {
		showSideDrawer: false,
	}

	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer: false})
	}

	sideDrawerTogglerHandler = () => {
		this.setState(prevState => {
			return {showSideDrawer: !prevState.showSideDrawer}
		})
	}

	render(){
		return(
			<React.Fragment>
				<Toolbar toggler={this.sideDrawerTogglerHandler} />
				<SideDrawer pop={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
				<main className={classes.content}>
			    {this.props.children}
				</main>
			</React.Fragment>
		)
	}
}

export default Layout