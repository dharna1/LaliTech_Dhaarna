import './App.css'
import { ProtectedRoute } from './components/ProctedRoutes'
import { AppLayout } from './layout/AppLayout'
import { AddProduct } from './pages/AddProduct'
import { EditProduct } from './pages/EditProduct'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: 
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
        },
        {
          path: '/edit/:id?',
          element: 
          <ProtectedRoute>
          <EditProduct />
          </ProtectedRoute>
        },
        {
          path: '/add',
          element: 
          <ProtectedRoute>
          <AddProduct />
          </ProtectedRoute>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
