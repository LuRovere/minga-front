import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, NewAuthor, NewComic, NewChapter, ComicsView, Pages, TestComics, ComicView, SignUp, SignIn, Profile, MyComics, UpdateComic, NewCompany } from '../views'
import MyReactions from "../components/MyReactions";
import EditChapterForm from "../components/EditChapterForm";
import NewRole from "../components/NewRole";


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
        path:'/new-chapter/:id',
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
        path:"/profile/me",
        element:<Profile/>
      },
      {
        path: "/companies/me",
        element: <Profile/>
      },{
        path: "/edit-comics",
        element: <MyComics />
      }, {
        path: "/edit-comic/:id",
        element: <UpdateComic />
      },
      {
        path:"/edit-chapter",
        element:<EditChapterForm />
      },{
        path:"/new-company",
        element:<NewCompany/>
      },{
        path:'/new-role',
        element:<NewRole/>
      }
    ]
  }

])

export default router