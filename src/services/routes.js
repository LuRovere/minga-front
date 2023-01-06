import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
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
        path: '/new-author',
        element: <NewAuthor />
      }
    ]
  }
])

export default router