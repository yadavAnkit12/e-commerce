import AddProduct from "./components/AddProduct"
import Home from "./components/Home"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Signup from "./components/Signup"
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"


const App=()=>{
  return <>
  <Router>
    <Routes>

    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/addToProduct" element={<AddProduct/>}/>
    <Route path="/showCart" element={<Cart/>}></Route>
      </Routes>
      

  </Router>


 </>
}
export default App