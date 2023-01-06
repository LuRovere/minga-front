import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, CreateComic } from '../views'


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
        element: <CreateComic/>
      }
    ]
  }
])

export default router