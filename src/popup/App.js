import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  root: {
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
