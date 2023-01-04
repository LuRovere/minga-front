import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, NewAuthor } from '../views'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create-author',
        element: <NewAuthor />
      }
    ]
  }
])

export default router