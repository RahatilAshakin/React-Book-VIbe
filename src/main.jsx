import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBooks from './Components/Listed Books/ListedBooks';
import PagestoReads from './Components/Pages to Reads/PagestoReads';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch('/books.json');
          if (!res.ok) {
            throw new Error('Failed to load books');
          }
          return res.json();  // Make sure to return the parsed JSON
        }
      },
      {
        path: "/Listed Book",
        element: <ListedBooks />,
      },
      {
        path: "/Pages to Read",
        element: <PagestoReads />,
      },
      {
        path: "/Book Details/:id",
        element: <BookDetails />,
        loader: async () => {
          const res = await fetch('/books.json');
          if (!res.ok) {
            throw new Error('Failed to load books');
          }
          return res.json();  // Make sure to return the parsed JSON
        }
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
