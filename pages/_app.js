import '../styles/globals.css'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NKFX3F8' });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
