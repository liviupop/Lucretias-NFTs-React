import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          Lucretzia's Tookit for the Nroken Hearted NFTs - Elrond Network
        </title>
        <meta
          name="description"
          content="Lucretzia's Toolkit for the Broken Hearted is the Original Collection from the NFT series launched on Elrond Network. A series of 333 NFTs, manually minted."
        />
        <meta
          property="og:title"
          content="Lucretzia's Tookit for the Nroken Hearted NFTs - Elrond Network"
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
      <div className={styles['Hero']}>
        <img
          alt="image"
          src="/playground_assets/lucretzia-small-1500w.png"
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <h1 className={styles['text']}>
            Lucretzia&apos;s Toolkit for the Broken Hearted - The OG Collection
          </h1>
          <h2 className={styles['text01']}>
            <span className={styles['text02']}>
              333 Handmade NFTs.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className={styles['text04']}>A true labour of love</span>
          </h2>
          <div className={styles['BtnGroup']}>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Mint a scene
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
            <button
              className={` ${styles['button1']} ${projectStyles['button']} `}
            >
              Claim a back cover
            </button>
          </div>
          <span className={styles['text05']}>
            <span>
              Lucretzia has a broken heart. Instead of going to sleep with her
              broken heart, she prefers being creative and finding various ways
              of using it. She is still in search, so if you know a better, more
              playful, ingenious way of using a broken heart, please let her
              know.
            </span>
            <br></br>
            <span></span>
          </span>
          <span className={styles['Text08']}>
            <span></span>
            <br></br>
            <span>
              <span>
                This collection was minted manually in October 2021. There was
                no market place or easy method for minting an NFT.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              There are 20 editions of 16 scenes. 16 scenes are for sale, 2 for
              gifts and giveaways, 2 for the team.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              There are 10 editions of the backcover. 8 are for sale, 1 for an
              acution, 1 for the team.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Each back cover comes with 0.1% of all future royalties.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              You can claim it if you have a full collection from the same
              edition (eg. all 16 scenes from 6/20).
            </span>
          </span>
        </div>
      </div>
      <a
        href="https://bit.ly/LucreReRoadmap"
        target="_blank"
        rel="noreferrer noopener"
        className={styles['link']}
      >
        <img
          alt="image"
          src="/playground_assets/lucrelogo-200w.png"
          className={styles['image1']}
        />
      </a>
    </div>
  )
}

export default Home
