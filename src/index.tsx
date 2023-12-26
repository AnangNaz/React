import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import SignUp from './pages/signUp'
import LogIn from './pages/logIn'
import ContactUs from './pages/contactUs'
import AboutUs from './pages/about'
import ProductPage from './pages/productPage'
import ProductList from './pages/productList'
import Cart from './pages/cart'
import HistoryTransaction from './pages/HistoryTransaction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/contact',
    element: <ContactUs />
  },
  {
    path: '/productlist',
    element: <ProductList />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/history',
    element: <HistoryTransaction />
  }
])

const rootElement = document.getElementById('root')

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
