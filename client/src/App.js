import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// // components
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// containers
import {
  About,
  Citizenship,
  Consultation,
  Contact,
  Deportation,
  Error,
  GreenCards,
  Landing,
  WorkPermit,
} from "./containers";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Header />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "citizenship",
        element: <Citizenship />,
      },
      {
        path: "consultation",
        element: <Consultation />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "deportation",
        element: <Deportation />,
      },
      {
        path: "green-cards",
        element: <GreenCards />,
      },
      {
        path: "work-permit",
        element: <WorkPermit />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
