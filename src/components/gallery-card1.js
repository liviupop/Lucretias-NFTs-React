import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card1.module.css'

const GalleryCard1 = (props) => {
  return (
    <div
      className={` ${styles['GalleryCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.title}</h2>
      <span className={styles['text1']}>{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'Project Title',
}

GalleryCard1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard1
