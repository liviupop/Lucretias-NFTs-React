import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card3.module.css'

const GalleryCard3 = (props) => {
  return (
    <div
      className={` ${styles['GalleryCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <h1 className={styles['text']}>{props.title}</h1>
        <span className={styles['text1']}>{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard3.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
}

GalleryCard3.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard3
