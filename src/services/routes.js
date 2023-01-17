import { createBrowserRouter } from "react-router-dom";
import Reactions from "../components/Reactions";
import Layout from "../layout/Layout";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics } from '../views'

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
        path:'/comics',
        element:<ComicsView/>
      },
      {
        path: '/pages/:id',
        element: <Pages />
      },
      {
        path: '/test',
        element: <TestComics />
      },
      {
        path:'/reactions/:id',
        element:<Reactions/>
      },
    ]
  }
])

export default router