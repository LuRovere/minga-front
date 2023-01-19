import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Reactions from "../components/reactions/Reactions";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView, SignUp, SignIn  } from '../views'
import Chapters from "../components/Chapters";
import ChapterCard from "../components/ChapterCard";
import MyReactions from "../components/MyReactions";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },{
        path: '/new-author',
        element: <NewAuthor />
      },{
        path: '/new-comic',
        element: <NewComic/>
      },{
        path:'/new-chapter',
        element:<NewChapter/>
      },{
        path:'/comic/:id',
        element: <ComicView/>
      },{
        path:'/comics',
        element:<ComicsView/>
      },{
        path: '/pages/:id',
        element: <Pages />
      },
      {
        path: '/reactions/me',
        element: <MyReactions />
      },
      {
        path: '/test',
        element: <TestComics />
      },{
        path:"/signin",
        element:<SignIn/>
      },{
        path:"/signup",
        element:<SignUp/>
      }
    ]
  }
])

export default router