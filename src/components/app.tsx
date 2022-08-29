import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createI18n, I18nProvider } from 'react-simple-i18n'
import Layout from './layout'
import Home from './home'
import './app.scss'
import langData from 'utils/lang-data'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/safemint-home' : '/'

const App = () => {
  return (
    <I18nProvider i18n={createI18n(langData, { lang: 'enUS' })}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={BASE_URL} element={<Home />} />
            <Route path={`${BASE_URL}/gallery`} element={<div>gallery</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
