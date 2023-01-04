import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, CreateChapter } from '../views'


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
        element:<CreateChapter/>
      }
    ]
  }
])

export default router