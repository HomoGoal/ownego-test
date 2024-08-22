import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { stores } from '../data';

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const params = useParams();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpenMenu(false);
    }
  }, [params]);

  return (
    <div className="side-bar">
      <div className="side-bar__title">
        <h1>Milk Tea Store</h1>
      </div>
      <button className="side-bar__menu-control" onClick={handleOpenMenu}>
        MENU
      </button>
      <div className={`side-bar__nav ${openMenu && 'active'}`}>
        {stores.map((item) => (
          <NavLink
            to={`/${item.id}`}
            key={item.name + item.id}
            className={({ isActive }) =>
              isActive ? 'side-bar__nav-item active' : 'side-bar__nav-item'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
