import React from "react";

const FullScreenNav = () => {
  return (
    <nav aria-label='main'>
      <ul className='flex h-full items-center gap-4'>
        <li>
          <a
            href='#about'
            className='text-2xl group transition duration-300 ease-in-out'
          >
            <span className='bg-left-bottom bg-gradient-to-r from-zinc-800 to-zinc-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              About
            </span>
          </a>
        </li>
        <li>
          <a
            href='#skills'
            className='text-2xl group transition duration-300 ease-in-out'
          >
            <span className='bg-left-bottom bg-gradient-to-r from-zinc-800 to-zinc-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Skills
            </span>
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className='text-2xl group transition duration-300 ease-in-out'
          >
            <span className='bg-left-bottom bg-gradient-to-r from-zinc-800 to-zinc-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Projects
            </span>
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='text-2xl group transition duration-300 ease-in-out'
          >
            <span className='bg-left-bottom bg-gradient-to-r from-zinc-800 to-zinc-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FullScreenNav;
