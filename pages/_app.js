import '../styles/globals.css'
import TagManager from 'react-gtm-module';

TagManager.initialize({ gtmId: 'GTM-NKFX3F8' });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
