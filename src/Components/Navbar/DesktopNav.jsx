
import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../constants/index.js";

function DesktopNav({ active, onNavigate }) {
  return (
    <div className="hidden items-center justify-center min-[1120px]:flex">
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          active={active}
          onClick={onNavigate}
        />
      ))}
    </div>
  );
}


export default React.memo(DesktopNav)