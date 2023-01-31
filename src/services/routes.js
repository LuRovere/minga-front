import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Reactions from "../components/reactions/Reactions";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView, SignUp, SignIn  } from '../views'
import Chapters from "../components/Chapters";
import ChapterCard from "../components/ChapterCard";
import MyReactions from "../components/MyReactions";
import DonationSuccsess from "../components/Donations/DonationSuccsess";


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
      },{
        path:"/donation",
        element:<DonationSuccsess/>
      }
    ]
  }
])

export default router