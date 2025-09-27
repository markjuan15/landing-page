import { Route, Routes } from 'react-router'
import Home from './pages/home'

function App() {

  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />}></Route> */}
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/home" element={<Home />}></Route> */}
    </Routes>
  )
}

export default App
