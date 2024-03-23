import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Article from "./ref/Article.jsx";
import ErrorElement from "./components/ErrorElement";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import SubLevelNavigate from "./components/SubLevelNavigate";
import MainPage from "./components/MainPage";
import Design from "./components/Design";
import SecondLevelNavigate from "./components/SecondLevelNavigate.jsx";
import SubPageCard from "./components/SubPageCard.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Design />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:name",
        element: <HomePage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/genai/:subLevelItem",
        element: <MainPage />,
      },
      {
        path: "/:name/:subLevelItem",
        element: <SubLevelNavigate />,
      },
      {
        path: "/:name/:subLevelItem/:secondLevelItem",
        element: <SecondLevelNavigate />,
      },
      {
        path: "*",
        element: <ErrorElement />,
      },
      {
        path: "/sub",
        element: <SubPageCard />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
