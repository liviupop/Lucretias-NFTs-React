import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <button className="button">{props.button}</button>
    </div>
  )
}

Component1.defaultProps = {
  button: 'Button',
}

Component1.propTypes = {
  button: PropTypes.string,
}

export default Component1
