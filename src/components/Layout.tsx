import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Navbar here</div>
      <div>
        <Outlet />
      </div>
      <div>Footer here</div>
    </div>
  );
};

export default Layout;
