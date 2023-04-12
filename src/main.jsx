import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./error-page";
import Contact, {
    loader as contactLoader,
    action as contactAction
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
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Index />
                    },
                    {
                        path: 'contacts/:contactId',
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction
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
            }
        ]
    },

])

// This needs to be updated
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
