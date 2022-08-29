import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createI18n, I18nProvider } from 'react-simple-i18n'
import Layout from './layout'
import Home from './home'
import './app.scss'
import langData from 'utils/lang-data'

const App = () => {
  return (
    <I18nProvider i18n={createI18n(langData, { lang: 'enUS' })}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galary" element={<div>content 123</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
