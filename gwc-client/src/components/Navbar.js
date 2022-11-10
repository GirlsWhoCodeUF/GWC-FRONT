import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
      name="Home"
      active={activeItem == "Home"}
      onClick={handleItemClick}
      as={Link}
      to="/"/>
      <Menu.Item
        name="About"
        active={activeItem == "About"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
       <Menu.Item
        name="Calendar"
        active={activeItem == "Calendar"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
       <Menu.Item
        name="Contact"
        active={activeItem == "Contact"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
       <Menu.Item
        name="Login"
        active={activeItem == "Login"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

    </Menu>
  );
  return Navbar;
}

export default Navbar;
