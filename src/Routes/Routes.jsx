import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import App from '../App'
import Details from '../components/Details/Details';
import ListedBooks from '../pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
  {
    path: "/", 
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          index: true,
          // loader: () => fetch('/booksData.json'),
          Component: Home
        },
        {
          path: "book/:id",
          loader: () => fetch('/booksData.json'),
          Component: Details
        },
        {
          path: "listed",
          loader: () => fetch('/booksData.json'),
          Component: ListedBooks
        }
    ]
  },
  {
    path: "app",
    Component: App
  }
])