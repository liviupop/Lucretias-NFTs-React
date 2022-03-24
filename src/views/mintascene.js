import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './mintascene.module.css'

const Mintascene = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          Mintascene - Lucretzia's Tookit for the Broken Hearted NFTs - Elrond
          Network
        </title>
        <meta
          name="description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:title"
          content="Mintascene - Lucretzia's Tookit for the Broken Hearted NFTs - Elrond Network"
        />
        <meta
          property="og:description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b346dcc-320a-4d97-a054-0702b2a61e52/16f0d2d8-a46d-4db4-9fd6-3ce4850ccfb0?org_if_sml=1"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/birds_flying_high_ypu_know_how_i_feel-300w.png"
        className={styles['image']}
      />
      <h1 className={styles['text']}>
        <span className={styles['text1']}>
          Connect your wallet
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span className={styles['text3']}>to mint a random scene</span>
      </h1>
      <Link
        to="/"
        className={` ${styles['navlink']} ${projectStyles['button']} `}
      >
        Web Wallet
      </Link>
      <Link
        to="/"
        className={` ${styles['navlink1']} ${projectStyles['button']} `}
      >
        Maiar App
      </Link>
      <img
        alt="image"
        src="/playground_assets/lucre_hiding-200w.png"
        loading="eager"
        className={styles['image1']}
      />
    </div>
  )
}

export default Mintascene