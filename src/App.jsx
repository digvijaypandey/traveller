import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ErrorPage } from "./pages/errorPage";
import { MainComponent } from "./uiLayout/mainLayout";
import { Services } from "./pages/Services";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />, //main parrent component
    errorElement: <ErrorPage />, // this will use for creating custom error page
    children: [
      {
        path: "/",
        element: < Home/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);
export const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
