import React from "react"
import PropTypes from "prop-types"
import css from '../styles/hello-world.sass'
class HelloWorld extends React.Component {
  render () {
    return (
    	<div className={css.hello}>
        <h1>Greeting: {this.props.greeting}</h1>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
