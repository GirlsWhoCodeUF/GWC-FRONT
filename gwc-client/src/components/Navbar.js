import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar(){
    
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);
  
    const handleItemClick = (e, { name }) => setActiveItem(name);

    return(
        <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
        name="Home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
        <Menu.Item
        name="About"
        active={activeItem === 'about'}
        onClick={handleItemClick}
        as={Link}
        to="/About"
      />
      <Menu.Item
        name="Calendar"
        active={activeItem === 'Calendar'}
        onClick={handleItemClick}
        as={Link}
        to="/Calendar"
      />
        </Menu>
    );

}
export default NavBar;


