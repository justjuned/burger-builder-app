import React from "react"
// import PropTypes from "prop-types"
import '../stylesheets/index.css';
import Layout from '../components/layouts/layout'
import BurgerBuilder from '../containers/BurgerBuilder/burger_builder'

class App extends React.Component {
  render () {
    return (
    	<div>
    		<Layout>
    			<BurgerBuilder />
    		</Layout>
      </div>
    );
  }
}

export default App
