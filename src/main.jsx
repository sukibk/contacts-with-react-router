import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Contact from "./routes/contact.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
