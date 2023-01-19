import { createBrowserRouter } from "react-router-dom";
import Layou from "../layout/Layou";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView, SignUp, SignIn  } from '../views'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layou />,
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
      }
    ]
  }
])

export default router