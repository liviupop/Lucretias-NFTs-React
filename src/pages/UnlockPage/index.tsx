import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';

export const UnlockRoute: () => JSX.Element = () => {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.home;
    }
  }, [isLoggedIn]);

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto text-center' data-testid='unlockPage'>
        <img
          alt='image'
          src='/bird_flying-300w.png'
          className='claimabackcover_image__1NiLU'
        />
        <h3 className='mb-4 d-flex flex-column'>
          <span>Connect your wallet to</span>
          <span>claim your back cover NFT</span>
        </h3>
        <div className='d-flex flex-column'>
          {/* <ExtensionLoginButton
            callbackRoute={routeNames.home}
            loginButtonText={'Extension'}
            className={'btn btn__secondary '}
          /> */}
          <WebWalletLoginButton
            callbackRoute={routeNames.home}
            loginButtonText={'Web wallet'}
            className={'btn btn__secondary '}
          />
          {/* <LedgerLoginButton
            loginButtonText={'Ledger'}
            callbackRoute={routeNames.home}
            className={'btn btn__secondary'}
          /> */}
          <WalletConnectLoginButton
            callbackRoute={routeNames.home}
            loginButtonText={'Maiar'}
            className={'btn btn__secondary'}
          />

          <img
            alt='image'
            src='/backside-200w.png'
            loading='eager'
            className='text-center mx-auto mt-2'
            width='100'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default UnlockRoute;
