import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createI18n, I18nProvider } from 'react-simple-i18n'
import Layout from './layout'
import Home from './home'
import './app.scss'
import langData from 'utils/lang-data'
import Projects from './projects'
import Apply from './apply'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/safemint-home' : '/'

const App = () => {
  return (
    <I18nProvider i18n={createI18n(langData, { lang: 'enUS' })}>
      <BrowserRouter basename={BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
