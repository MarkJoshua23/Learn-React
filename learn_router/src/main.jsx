import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from "./error_page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact, {
  loader as contactLoader,
} from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import EditContact, {
  action as editAction,
} from "./routes/edit";
//routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //loader of data for specific route
    loader: rootLoader,
    action: rootAction,
    children:[
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        //this becomes a sibling not a child even though the url makes it a child since we want to replace the contact screen with edit screen
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
