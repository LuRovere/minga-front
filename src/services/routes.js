import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home } from '../views'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default router