import Product from './product'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Cart from './Cart'
import { Provider } from 'react-redux'
import store from "./store/store"
import Home from './Home'
import "./home.css"
import Category from './Category'
import Signup from './users/Signup'
import Login from './users/Login'
import Layout from './Layout';


function App() {


  return (
    <>

      <Router>
        <Provider store={store}>
          <Routes>

            <Route path="/" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>


          <Routes>

            <Route path="/home" element={<Layout><Home /></Layout>} />
          </Routes>

          <Routes>
            <Route path='/products' element={<Layout><Product /></Layout>} />
          </Routes>
          <Routes>
            <Route path='/electronics' element={<Layout><Category key="electronics" Category='electronics' /></Layout>} />
          </Routes>
          <Routes>
            <Route path='/jewelery' element={<Layout><Category key="jewelery" Category='jewelery' /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/men's clothing" element={<Layout><Category key="men's clothing" Category="men's clothing" /></Layout>} />
          </Routes>
          <Routes>
            <Route path="/women's clothing" element={<Layout><Category key="women's clothing" Category="women's clothing" /></Layout>} />
          </Routes>

          <Routes>
            <Route path='/bag' element={<Layout><Cart /></Layout>} />
          </Routes>

        </Provider>
      </Router>

    </>
  )
}

export default App
