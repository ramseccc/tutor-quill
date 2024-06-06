import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from './components/Pages/MainPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
