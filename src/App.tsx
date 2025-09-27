import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
