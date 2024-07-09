import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Contact from './routes/contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route path='contacts/:contactId' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
