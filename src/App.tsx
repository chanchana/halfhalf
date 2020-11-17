import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useMediaQuery } from 'react-responsive'

import { Search } from './pages'

function App() {


  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  // const isDesktop = useMediaQuery({ minWidth: 1024px)' })
  // const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  // const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  // const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })

  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log(isDesktop)
  console.log(isTablet)
  console.log(isMobile)
  
  // console.log(isDesktopOrLaptop)
  // console.log(isBigScreen)
  // console.log(isTabletOrMobile)
  // console.log(isTabletOrMobileDevice)
  // console.log(isPortrait)

  const screen = {
    isDesktop,
    isTablet,
    isMobile,
  }


  return (
    <div>
      {/* {isDesktop && <p>D</p>} {isTablet && <p>T</p>} {isMobile && <p>M</p>} */}
      <Search screen={screen} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
