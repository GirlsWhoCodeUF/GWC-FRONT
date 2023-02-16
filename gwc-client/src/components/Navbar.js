import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'
import logo from  '../media/HomeLogo.png';

function NavBar(){
  
   const pathname = window.location.pathname;
   const path = pathname === '/' ? 'home' : pathname.substr(1);
   const [activeItem, setActiveItem] = useState(path);
    const handleItemClick = (e, { name }) => setActiveItem(name);


   return(
       <Menu className='navbar'>
        <Menu.Item 
           onClick={handleItemClick}
           as={Link}
           to="/">
           <img src={logo} alt="" />
        </Menu.Item> 
     <Menu.Menu secondary className='navbar-right'>
       <Menu.Item
       name="About Us"
       active={activeItem === 'about us'}
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
      <Menu.Item
       name="Our Team"
       active={activeItem === 'Our Team'}
       onClick={handleItemClick}
       as={Link}
       to="/OurTeam"
     />
      <Menu.Item
       name="Contact Us"
       active={activeItem === 'Contact Us'}
       onClick={handleItemClick}
       as={Link}
       to="/Contact"
     />
  
       <Menu.Item
       name ="Members"
       active={activeItem === 'Members'}
       onClick={handleItemClick}
       as={Link}
       to="/Login"
       />
       </Menu.Menu>
       </Menu>
   );


}
export default NavBar;
