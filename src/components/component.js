import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/heart_and_star-200w.png',
  image_alt: 'image',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
