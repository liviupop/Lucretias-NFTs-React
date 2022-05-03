import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mintascene.css'

const Mintascene = (props) => {
  return (
    <div className="mintascene-container">
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
        className="mintascene-image"
      />
      <h1 className="mintascene-text">
        <span className="mintascene-text1">
          Connect your wallet
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span className="mintascene-text3">to mint a random scene</span>
      </h1>
      <Link to="/" className="mintascene-navlink button">
        Web Wallet
      </Link>
      <Link to="/" className="mintascene-navlink1 button">
        Maiar App
      </Link>
      <img
        alt="image"
        src="/playground_assets/lucre_hiding-200w.png"
        loading="eager"
        className="mintascene-image1"
      />
    </div>
  )
}

export default Mintascene
