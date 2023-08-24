import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
