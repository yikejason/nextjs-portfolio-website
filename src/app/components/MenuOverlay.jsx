import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((item, index) => (
        <li key={index}>
          <NavLink key={index} href={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

