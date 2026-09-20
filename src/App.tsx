import { lazy } from "react"
import { Route, Routes } from "react-router"

const Homepage = lazy(() => import('./pages/Home.tsx'))

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
