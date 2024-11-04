import React, { useState } from 'react';
import { Menu, Item, Submenu, useContextMenu, ItemParams } from 'react-contexify';
import 'react-contexify/ReactContexify.css';

type MenuItem = {
  id: string;
  label: string;
  disabled?: boolean;
  submenu?: MenuItem[];
};

interface ContextMenuProps {
  menus: {
    id: string; 
    menuItems: MenuItem[]; 
  }[];
  onItemClick: (params: ItemParams) => void; 
  divs: {
    id: string; 
    content: string;
    menuId: string;
  }[];
}

function MultiDivContextMenu({ menus, onItemClick, divs }: ContextMenuProps) {
  const [clickedText, setClickedText] = useState<string | null>(null);

  function handleContextMenu(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuId: string,
    text: string,
  ) {
    event.preventDefault();
    setClickedText(text);

    const { show } = useContextMenu({
      id: menuId, 
    });

    show({
      event,
      props: {
        text: text,
      },
    });
  }

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.submenu) {
        return (
          <Submenu key={item.id} label={item.label}>
            {renderMenuItems(item.submenu)}
          </Submenu>
        );
      }

      return (
        <Item key={item.id} id={item.id} onClick={onItemClick} disabled={item.disabled}>
          {item.label}
        </Item>
      );
    });
  };

  return (
    <div>
      {divs.map((div) => (
        <div
          key={div.id}
          id={div.id}
          onContextMenu={(event) => handleContextMenu(event, div.menuId, div.content)}
          style={{ padding: '20px', border: '1px solid black', marginBottom: '10px' }}
        >
          {div.content}
        </div>
      ))}
      {menus.map((menu) => (
        <Menu key={menu.id} id={menu.id}>
          {renderMenuItems(menu.menuItems)}
        </Menu>
      ))}
      {clickedText && <p>Current clicked text: {clickedText}</p>}
    </div>
  );
}

export default MultiDivContextMenu;
