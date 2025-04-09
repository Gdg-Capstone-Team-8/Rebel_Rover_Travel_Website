import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Package from "./pages/Package";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/package", element: <Package /> },
      { path: "/blog", element: <SingleBlog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default routes;
