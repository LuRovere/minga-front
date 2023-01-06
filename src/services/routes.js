import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, NewChapter } from '../views'


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
        path:'/create-chapter',
        element:<NewChapter/>
      }
    ]
  }
])

export default router