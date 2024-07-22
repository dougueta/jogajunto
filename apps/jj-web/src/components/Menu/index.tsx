// import { Typography } from '@mui/material'
import React from 'react';
import { MenuContainer, MenuItem } from './Menu.styles';

const Menu = ({ itens }) => {
  if (!itens) return <div>oi</div>;
  return (
    <MenuContainer>
      <ul>
        {itens.map((item: any, i: any) => (
          <MenuItem key={i}>{item}</MenuItem>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default Menu;
