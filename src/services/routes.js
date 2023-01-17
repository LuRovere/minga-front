import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, NewAuthor, NewComic, NewChapter, Pages, TestComics } from '../views'

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
      },
      {
        path: '/new-comic',
        element: <NewComic/>
      },
      {
        path:'/new-chapter',
        element:<NewChapter/>
      },
      {
        path: '/pages/:id',
        element: <Pages />
      },
      {
        path: '/test',
        element: <TestComics />
      }
    ]
  }
])

export default router