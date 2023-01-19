import { createBrowserRouter } from "react-router-dom";
import Reactions from "../components/Reactions";
import Layout from "../layout/layout";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView  } from '../views'
import Chapters from "../layout/chapters";
import ChapterCard from "../layout/chapterCard";
import MyReactions from "../components/MyReactions";

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
        path: '/reactions',
        element: <MyReactions />
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