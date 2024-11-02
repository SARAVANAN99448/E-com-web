import Hero from "./assets/components/Hero"
import Login from "./assets/components/Login"
import Navbar from "./assets/components/Navbar"
import Products from "./assets/components/Products"
import Signup from "./assets/components/Signup"
import Contact from "./assets/components/Contact"
import Footer from "./assets/components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./assets/components/About"
import { Cartprovider } from "./assets/components/Cartcontext"
import Cart from "./assets/components/Cart"
import Newarrivals from "./assets/components/Newarrivals"
import Topselling from "./assets/components/Topselling"

const App = () => {
  return (<>
     <Cartprovider>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<><Navbar /><Hero /><Newarrivals/><Topselling/><About /><Footer /></>}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<><Contact /><Footer /></>}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </Cartprovider>
  </>)

}
export default App