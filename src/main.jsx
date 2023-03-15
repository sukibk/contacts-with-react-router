import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./error-page";
import Contact, {
    loader as contactLoader
}from "./routes/contact.jsx";
import Root, {
    loader as rootLoader,
    action as rootAction
} from './routes/root.jsx'
import EditContact,{
    action as editAction
} from "./routes/edit";
import {action as destoryAction} from './routes/destroy.jsx'
import Index from './routes/index.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader
            },
            {
                path: 'contacts/:contactId/edit',
                element: <EditContact/>,
                loader: contactLoader,
                action: editAction
            },
            {
                path: 'contacts/:contactId/destroy',
                action: destoryAction
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
