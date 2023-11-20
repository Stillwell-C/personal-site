import React from "react";
import FullScreenNav from "./FullScreenNav";

const Header = () => {
  return (
    <header className='fixed top-0 py-12 px-8 w-full flex justify-between z-10'>
      <div>
        <h1>
          <a href='#hero' className='text-3xl'>
            CS
          </a>
        </h1>
      </div>
      <FullScreenNav />
    </header>
  );
};

export default Header;
