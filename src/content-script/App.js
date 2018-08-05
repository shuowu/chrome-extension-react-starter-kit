import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    background: 'red',
    width: '100%',
    textAlign: 'center',
  },
}

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div>Chrome extension React starter kit</div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(App)
