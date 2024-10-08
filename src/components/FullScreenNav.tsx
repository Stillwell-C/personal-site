import { Link } from "react-scroll";
import navList from "../Data/NavList";

const FullScreenNav = () => {
  return (
    <nav aria-label='main'>
      <ul className='flex h-full items-center gap-4'>
        {navList.map((item) => (
          <li key={item}>
            <Link
              activeClass='active'
              to={item.toLowerCase()}
              href={`#${item.toLowerCase()}`}
              spy={true}
              smooth={true}
              offset={item === "Projects" ? -50 : 50}
              duration={500}
              className='text-2xl group transition duration-300 ease-in-out cursor-pointer pointer-events-auto'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                {item}{" "}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FullScreenNav;
