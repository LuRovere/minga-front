import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, NewComic } from '../views'


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
        path: '/new-comic',
        element: <NewComic/>
      }
    ]
  }
])

export default router