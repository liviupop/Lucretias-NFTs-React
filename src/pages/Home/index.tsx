import { sendTransactions, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { contractAddress, lucretziasWallet } from 'config';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { dAppName } from 'config';
import { routeNames } from 'routes';
import BigNumber from 'bignumber.js';
import { getRemainingSupply } from 'apiRequests';

const Home = () => {
  const account = useGetAccountInfo();
  const loggedIn = Boolean(account?.address);
  const navigate = useNavigate();
  const [remainingSupply, setRemainingSupply] = React.useState(333);
  const [quantity, setQuantity] = React.useState(1);
  React.useEffect(() => {
    getRemainingSupply().then((res) => {
      if (res.success) {
        setRemainingSupply(res.data);
      }
    })
  }, []);

  const handleMint = async () => {
    if (!loggedIn) {
      navigate(routeNames.unlock);
      return;
    }
    const amount = new BigNumber(333000000000000000).multipliedBy(quantity).toString();
    const transaction = {
      receiver: contractAddress,
      gasLimit: 5000000 * quantity,
      value: amount,
      data: `buy@01@0${quantity}`
    };
    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: transaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing buy transaction',
        errorMessage: 'An error has occured during buying',
        successMessage: 'Transaction successful',
        transactionDuration: 10000
      }
    });
  };

  const handleClaimPingMessage = async () => {
    if (!loggedIn) {
      navigate(routeNames.unlock);
      return;
    }
    const transaction = {
      receiver: lucretziasWallet,
      gasLimit: 5000000,
      value: '1000000000000000',
      data: 'Please check my wallet for a full collection'
    };
    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: transaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing ping transaction',
        errorMessage: 'An error has occured during pinging',
        successMessage: 'Transaction successful',
        transactionDuration: 10000
      }
    });
  };

  const handleQtyChange = (val: number) => {
    let newQuantity = quantity + val;
    if (newQuantity === 0) {
      newQuantity = 1;
    }
    if (newQuantity === 9) {
      newQuantity = 8;
    }
    setQuantity(newQuantity);
  }

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
          <h4 className='py-3'>333 ({remainingSupply} left) Handmade NFTs. A true labour of love</h4>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-lg-5 d-flex justify-content-center mt-5' style={{width: '100%'}}>
                <a
                  href='#'
                  onClick={() => handleQtyChange(-1)}
                  className='btn btn__primary mr-3'
                  data-testid='loginBtn'
                >
                  -
                </a>
                <a
                  href='#'
                  onClick={handleMint}
                  className='btn btn__primary mr-3'
                  data-testid='loginBtn'
                >
                  Mint {quantity === 1 ? 'a' : quantity} scene{quantity > 1 && 's'}
                </a>
                <a
                  href='#'
                  onClick={() => handleQtyChange(1)}
                  className='btn btn__primary mr-3'
                  data-testid='loginBtn'
                >
                  +
                </a>
              </div>
              <div className='col-sm-12 col-lg-6 d-flex justify-content-left mt-5'>
                <a
                  href='#'
                  onClick={handleClaimPingMessage}
                  className='btn btn__secondary'
                  data-testid='loginBtn'
                  style={{ width: '100%' }}
                >
                  Claim a back cover
                </a>
              </div>
            </div>
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
            beloved collection. The owners of those NFTs will be most
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
