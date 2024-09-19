import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/nav/Navbar'
import Personal from './pages/Personal'
import Business from './pages/Business'

function App() {
const router = createBrowserRouter([
  {path:"/",element:<><Navbar/>
  <Outlet/>
  </>,

    children:[

    {path:"/",
      element:<Home/>
    },
    
    {
      path:"/personal",
      element:<Personal/>
    },
    {
      path:"/business",
      element:<Business/>
    }
    ]
  },
  
])
  return (
    <>
    <RouterProvider router={router}/>
        </>
  )
}

export default App
