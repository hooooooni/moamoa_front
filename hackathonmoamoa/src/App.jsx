import { Layout } from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"



function App() {


  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>} />          
        </Route>
      </Routes> */}
      <MainPage/>
    </>
  )
}

export default App
