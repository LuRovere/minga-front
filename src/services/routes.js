import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, NewAuthor, NewComic, NewChapter, ComicView } from '../views'
import Chapters from "../layout/chapters";
import ChapterCard from "../layout/chapterCard";
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
        path:'/comic/:id',
        element: <ComicView/>
      }
    ]
  }
])

export default router