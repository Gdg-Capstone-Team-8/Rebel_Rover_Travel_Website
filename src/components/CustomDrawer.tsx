import { Contact, Home, Info, Menu, Newspaper, Package } from "lucide-react";
import { Button } from "./ui/button";
import {
  DrawerTrigger,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { NavLink } from "react-router-dom";

const CustomDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu
          className="cursor-pointer rounded p-2 text-white ring-2 duration-200 hover:opacity-60 hover:ring-black"
          size={40}
        />
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Rebel Rover</DrawerTitle>
          <DrawerDescription>Menu</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-y-5 px-4 *:opacity-60 **:w-full **:cursor-pointer *:hover:opacity-100 [&_a.active]:opacity-100">
          <NavLink to={""}>
            <Button>
              <Home />
              Home
            </Button>
          </NavLink>
          <NavLink to={"/about"}>
            <Button>
              <Info />
              About
            </Button>
          </NavLink>
          <NavLink to={"/package"}>
            <Button>
              <Package />
              Package
            </Button>
          </NavLink>
          <NavLink to={"/blog"}>
            <Button>
              <Newspaper />
              Blog
            </Button>
          </NavLink>
          <NavLink to={"/contact"}>
            <Button>
              <Contact />
              Contact
            </Button>
          </NavLink>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="default" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
