import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center h-[75px]">
        <div>
          <Link to="/">
            <img src="/logo.png" />
          </Link>
        </div>
        <div className="space-x-4 text-base">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <img src="/Profile.png" className="w-8" />
          <img src="/Cart.png" className="w-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;
