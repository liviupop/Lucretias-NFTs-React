import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './claimabackcover.css'

const Claimabackcover = (props) => {
  return (
    <div className="claimabackcover-container">
      <Helmet>
        <title>
          Claim a backcover - Lucretzia's Tookit for the Broken Hearted NFTs -
          Elrond Network
        </title>
        <meta
          name="description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:title"
          content="Claim a backcover - Lucretzia's Tookit for the Broken Hearted NFTs - Elrond Network"
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
        src="/playground_assets/bird_flying-300w.png"
        className="claimabackcover-image"
      />
      <h1 className="claimabackcover-text">
        <span className="claimabackcover-text1">
          Connect your wallet to
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span className="claimabackcover-text3">claim your back cover NFT</span>
      </h1>
      <Link to="/" className="claimabackcover-navlink button">
        Web Wallet
      </Link>
      <Link to="/" className="claimabackcover-navlink1 button">
        Maiar App
      </Link>
      <img
        alt="image"
        src="/playground_assets/backside-200w.png"
        loading="eager"
        className="claimabackcover-image1"
      />
    </div>
  )
}

export default Claimabackcover
