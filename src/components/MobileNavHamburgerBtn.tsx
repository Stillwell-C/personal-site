import React from "react";

type PropType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navColorShift: boolean;
};

const MobileNavHamburgerBtn = ({ open, setOpen, navColorShift }: PropType) => {
  return (
    <button
      className='relative cursor-pointer w-8 h-8 z-10 pointer-events-auto'
      onClick={() => setOpen((prev: boolean) => !prev)}
    >
      <div
        className={`rounded h-1 w-10 top-4 absolute -mt-0.5 transition-all duration-700 before:content-[''] before:w-10 before:h-1 before:rounded before:absolute before:duration-700 before:transition-all before:-translate-x-5  after:w-10 after:rounded after:h-1 after:absolute after:duration-700 after:transition-all after:-translate-x-5 ${
          open
            ? "bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45 rotate-[360deg]"
            : `${
                navColorShift ? "bg-black" : "bg-white"
              } before:-translate-y-3 after:translate-y-3`
        } ${
          navColorShift
            ? "before:bg-black after:bg-black"
            : "before:bg-white after:bg-white "
        }`}
      ></div>
    </button>
  );
};

export default MobileNavHamburgerBtn;
