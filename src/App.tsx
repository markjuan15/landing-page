import { Route, Routes } from 'react-router'
import Home from './pages/home'
import NotFound from './pages/components/notFound'

function App() {

  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  )
}

export default App
