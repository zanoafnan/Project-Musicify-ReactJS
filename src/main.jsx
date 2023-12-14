import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import PremiumPage from './pages/PremiumPage.jsx';
import DiscoverPage from './pages/DiscoverPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/discover",
    element: <DiscoverPage/>
  },
  {
    path: "/premium",
    element: <PremiumPage/>
  },
  {
    path: "/review",
    element: <ReviewPage/>,
  },
  
  {
    path: "/about",
    element: <AboutPage/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
