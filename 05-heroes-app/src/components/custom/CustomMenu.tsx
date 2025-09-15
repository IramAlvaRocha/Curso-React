import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { useLocation } from "react-router";


export const CustomMenu = () => {

  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            active={isActive("/")}
            className="navigation-menu-link rounded-md p-2"
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            active={isActive("/search")}
            className="navigation-menu-link rounded-md p-2"
          >
            <Link to="/search">Search superheroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
