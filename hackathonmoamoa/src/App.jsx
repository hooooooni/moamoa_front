import { Layout } from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Mypage from "./pages/Mypage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}v/>
        <Route path="/mypage" element={<Mypage />} />         
      </Routes>
    </>
  )
}

export default App
