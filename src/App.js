import './App.css';
import Navigational from "./components/Navigational";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import ProductPage from "./pages/ProductPage";
import customAxios from "./axios/customAxios";
import CartModal from "./components/CartModal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import {useDispatch} from "react-redux";
import {addToCart} from "./store/cart/cartSlice";
import ShippingAndCart from "./pages/ShippingAndCart";
import {GuardedRoute, GuardProvider} from 'react-router-guards'
import {isAuthenticated} from "./store/user/userSlice";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function App() {
  //const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector(isAuthenticated)
  const navigate = useNavigate()

  const getProducts = async () => {
    await customAxios.get('items/getAll').then((response) => {
      if (!response) {
        alert('No items')
      }
      setProducts([...response.data])
    }).catch(e => {
      if (e) {
        alert('Something went wrong! ' + e)
      }
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleModal = (boo) => {
    setShowModal(boo)
  }

  const handleAddToCart = (product, qty) => {
    let newProduct = {...product};
    newProduct['qty'] = qty
    dispatch(addToCart(newProduct))
  }

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (auth) {
        navigate('/login')
      }

    }else {
      next();
    }
  }

  return (
    <div className="App">
      <Navigational setShowModal={handleModal}/>
      <CartModal showModal={showModal} setShowModal={handleModal}/>
      <GuardProvider>
        <Routes>
          <Route path='/' element={<Home products={products} getProduct={getProducts}/>}/>
          <Route path='product/:id' element={<ProductPage addToCart={handleAddToCart}/>}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />} />
          <GuardedRoute path='account' element={<Account />} meta={{auth: true}}/>
          <Route path='cart' element={<ShippingAndCart />} />
          <Route path='account/product/:id' element={<ProductPage addToCart={handleAddToCart} /> } />
          <Route path="*"
                 element={
                   <main style={{ padding: "1rem" }}>
                     <p>There's nothing here!</p>
                   </main>
                 }
          />
        </Routes>
      </GuardProvider>
    </div>
  )
}

export default App;
