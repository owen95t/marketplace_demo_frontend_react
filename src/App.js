import './App.css';
import Navigational from "./components/Navigational";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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

function App() {
  //const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector(isAuthenticated)

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
    console.log('Route guard called')
    if (to.meta.auth) {
      if (!auth) {
        console.log('Redirecting')
        next.redirect('/login')
      } else if (auth) {
        next.redirect('/account')
      }
    }else {
      next();
    }
  }

  return (
    <div className="App">
        <Navigational setShowModal={handleModal}/>
        <CartModal showModal={showModal} setShowModal={handleModal}/>
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <Route
                exact path='/'
                render={(props) => (
                    <Home
                        {...props}
                        products={products}
                        getProduct={getProducts}
                    />)}
            />
            <Route
                exact path='/product/:id'
                exact render={(props) => (
                    <ProductPage
                        {...props}
                        addToCart={handleAddToCart}
                    />)}
            />
            <Route
                exact path='/login'
                render={() => <Login />}/>
            <Route
                exact path='/register'
                render={() => <Register />} />
            <GuardedRoute
                path='/account'
                meta={{auth: true}}
                exact component={(props) =>
                    <Account
                        {...props}
                    />}
            />
            <Route
                exact path='/cart'
                render={() => <ShippingAndCart />} />
            <Route
                exact path='/account/product/:id'
                render={(props) => (
                    <ProductPage
                        {...props}
                        addToCart={handleAddToCart} />
                )}
            />
            <Route path="*"
                   render={ () =>
                     <main style={{ padding: "1rem" }}>
                       <p>There's nothing here!</p>
                     </main>
                   }
            />
          </Switch>
        </GuardProvider>
    </div>
  )
}

export default App;
