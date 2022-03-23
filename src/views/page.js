import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          Page - Lucretzia's Tookit for the Nroken Hearted NFTs - Elrond Network
        </title>
        <meta
          name="description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:title"
          content="Page - Lucretzia's Tookit for the Nroken Hearted NFTs - Elrond Network"
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
        src="/playground_assets/birds_flying_high_ypu_know_how_i_feel-300w.png"
        alt="image"
        className={styles['image']}
      />
      <h1 className={styles['text']}>Connect your wallet</h1>
      <Link
        to="/"
        className={` ${styles['navlink']} ${projectStyles['button']} `}
      >
        Web Wallet
      </Link>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        Maiar App
      </button>
      <img
        src="31d5c3db-8e20-411b-b8e9-88f6241d823a"
        alt="image"
        className={styles['image1']}
      />
    </div>
  )
}

export default Page
