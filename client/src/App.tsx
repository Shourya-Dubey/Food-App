import './App.css'
import Login from './auth/Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from './MainLayout'
import Signup from './auth/Signup'

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children=[
    //   {
    //     path:"/login"
    //   }
    // ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {

  return (
    <main>
      <RouterProvider router={appRoute}>

      </RouterProvider>
    </main>
  )
}

export default App
