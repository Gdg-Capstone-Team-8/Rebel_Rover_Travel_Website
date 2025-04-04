import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Package from "./pages/Package";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
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
