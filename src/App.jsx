import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Nav from './Components/Work/Nav/Nav.jsx'
import Work from './Components/Work/Work'
import Blog from './Components/Blog/Blog'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Work/Footer/Footer.jsx'


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Nav/>}>
                <Route index element={<Work />} />
                <Route path='/Blog' element={<Blog />} />
            </Route>
        )
    )
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
