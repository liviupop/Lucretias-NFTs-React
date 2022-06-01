import { sendTransactions, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { contractAddress } from 'config';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { dAppName } from 'config';
import { routeNames } from 'routes';

const Home = () => {
  const account = useGetAccountInfo();
  const loggedIn = Boolean(account?.address);
  const navigate = useNavigate();
  const handleMint = async () => {
    if (!loggedIn) {
      navigate(routeNames.unlock);
      return;
    }
    const transaction = {
      receiver: contractAddress,
      gasLimit: 0,
      value: 0,
      data: 'buy@01'
    };
    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: transaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing mint transaction',
        errorMessage: 'An error has occured during minting',
        successMessage: 'Transaction successful',
        transactionDuration: 10000
      }
    });
  };

  return (
    <section>
      <div className='container d-flex'>
        <div className='img img__home'>
          <img src='/lucretzia-small-1200w.png' alt='' />
        </div>
        <div className='px-4'>
          <h1>
            Lucretzia`s Toolkit for the Broken Hearted. The OG Collection.
          </h1>
          <h4 className='py-3'>333 Handmade NFTs. A true labour of loves</h4>
          <div>
            <a
              href='#'
              onClick={handleMint}
              className='btn btn__primary mr-3'
              data-testid='loginBtn'
            >
              Mint a scene
            </a>
            <Link
              to={routeNames.unlock}
              className='btn btn__secondary'
              data-testid='loginBtn'
            >
              Claim a back cover
            </Link>
          </div>

          <div className='box my-4'>
            <h5>
              LUCRETZIA HAS A BROKEN HEART. INSTEAD OF GOING TO SLEEP WITH HER
              BROKEN HEART, SHE PREFERS BEING CREATIVE AND FINDING VARIOUS WAYS
              OF USING IT. SHE IS STILL IN SEARCH, SO IF YOU KNOW A BETTER, MORE
              PLAYFUL, INGENIOUS WAY OF USING A BROKEN HEART, PLEASE LET HER
              KNOW.
            </h5>
          </div>
          <p>
            This collection was minted manually in October 2021. There was no
            marketplace or easy method for minting an NFT. For each NFT the
            metadata was copy-pasted manually, the image hash copied from IFPS,
            and the transaction signed in the Maiar app. Mistakes were made,
            eyes were abused, but it was such an exciting time. This is the most
            beloved collection. The owners of those NFTs will be the most
            pampered and spoiled.
          </p>
          <ul>
            <li>There are 20 editions of 16 scenes.</li>
            <li>
              16 scenes are for sale, 2 for gifts and giveaways, 2 for the team.
            </li>
            <li>There are 10 editions of the back-cover.</li>
            <li>8 are for sale, 1 for an auction, 1 for the team.</li>
          </ul>
          <p>Each back-cover comes with 0.1% of all future royalties.</p>
          <p>
            You can claim it if you have a full collection from the same edition
            (eg. all 16 scenes from 6/20).
          </p>
        </div>
      </div>
    </section>
    // <div className='d-flex flex-fill align-items-center container'>
    //   <div className='row w-100'>
    //     <div className='col-12 col-md-8 col-lg-5 mx-auto'>
    //       <div className='card shadow-sm rounded p-4 border-0'>
    //         <div className='card-body text-center'>
    //           <h2 className='mb-3' data-testid='title'>
    //             {dAppName}
    //           </h2>

    //           <p className='mb-3'>
    //             This is an Elrond dapp sample.
    //             <br /> Login using your Elrond wallet.
    //           </p>

    //           <Link
    //             to={routeNames.unlock}
    //             className='btn btn-primary mt-3 text-white'
    //             data-testid='loginBtn'
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
