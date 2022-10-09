import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Bookmarked from "./pages/Bookmarked";
import TVSeries from "./pages/TVSeries";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/bookmarked",
    element: <Bookmarked />,
  },
  {
    path: "/tv-series",
    element: <TVSeries />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
