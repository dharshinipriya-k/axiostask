import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'
export const API_URL = "https://65b12ad7d16d31d11bde3e51.mockapi.io/taskdata"

function App() {

  let router = createBrowserRouter(AppRoutes)

  return <>
    <RouterProvider router={router}/>
  </>
}

export default App