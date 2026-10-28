import { lazy } from "react"
import { Route, Routes } from "react-router"

import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

const Homepage = lazy(() => import('./pages/Home.tsx'))
const News = lazy(() => import('./pages/News.tsx'))
const NewsDetail = lazy(() => import('./pages/NewsDetail.tsx'))
const Faculty = lazy(() => import('./pages/Faculty.tsx'))

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/noticias' element={<News />}/>
        <Route path='/noticia-en-detalle' element={<NewsDetail />} />
        <Route path='/facultad' element={<Faculty />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
