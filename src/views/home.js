import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Lucretzia's Tookit for the Broken Hearted NFTs - Elrond Network
        </title>
        <meta
          name="description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:title"
          content="Lucretzia's Tookit for the Broken Hearted NFTs - Elrond Network"
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
      <div className="home-hero">
        <img
          alt="image"
          src="/playground_assets/lucretzia-small-1200w.png"
          className="home-image"
        />
        <div className="home-container1">
          <h1 className="home-text">
            Lucretzia&apos;s Toolkit for the Broken Hearted. The OG Collection.
          </h1>
          <h2 className="home-text01">
            <span className="home-text02">
              333 Handmade NFTs.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text03">A true labour of love</span>
          </h2>
          <div className="home-btn-group">
            <Link to="/mintascene" className="home-navlink button">
              Mint a scene
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <Link to="/claimabackcover" className="home-navlink1 button">
              Claim a back cover
            </Link>
          </div>
          <span className="home-text04">
            <span>
              Lucretzia has a broken heart. Instead of going to sleep with her
              broken heart, she prefers being creative and finding various ways
              of using it. She is still in search, so if you know a better, more
              playful, ingenious way of using a broken heart, please let her
              know.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
          <span className="home-text07">
            <span></span>
            <span>
              This collection was minted manually in October 2021. There was no
              marketplace or easy method for minting an NFT. For each NFT the
              metadata was copy-pasted manually, the image hash copied from
              IFPS, and the transaction signed in the Maiar app. Mistakes were
              made, eyes were abused, but it was such an exciting time. This is
              the most beloved collection. The owners of those NFTs will be the
              most pampered and spoiled.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              There are 20 editions of 16 scenes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              16 scenes are for sale, 2 for gifts &amp; giveaways, 2 for the
              team.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <span>
              There are 10 editions of the back-cover.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>8 are for sale, 1 for an auction, 1 for the team.</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Each back-cover comes with 0.1% of all future royalties.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <span>
              You can claim it if you have a full collection from the same
              edition (eg. all 16 scenes from 6/20).
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <a
        href="https://bit.ly/LucreReRoadmap"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img
          alt="image"
          src="/playground_assets/lucrelogo-200w.png"
          className="home-image1"
        />
      </a>
    </div>
  )
}

export default Home
