import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { store } from '../store'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
