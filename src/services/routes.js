import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView, SignUp, SignIn, Profile } from '../views'

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
      },{
        path: '/test',
        element: <TestComics />
      },{
        path:"/signin",
        element:<SignIn/>
      },{
        path:"/signup",
        element:<SignUp/>
      },{
        path:"/profile/me",
        element:<Profile/>
      },
      {
        path: "/companies/me",
        element: <Profile/>
      }
    ]
  }
])

export default router