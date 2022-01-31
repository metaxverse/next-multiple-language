import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import i18n from '../i18n'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if(router.locale){
    i18n.changeLanguage(router.locale);
  }
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
