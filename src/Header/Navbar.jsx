import { GiHamburgerMenu } from "react-icons/gi";
import { MdVideoCall } from "react-icons/md";
import { MyContext } from "../context/Context";
import { FiSearch } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import userpic from "./imges/userpic.svg";
import logo from "./imges/logo.svg";
import path from "./imges/ui-11.svg";
import { useContext } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const { togle, setTogle, vedio, setVedio, setSearch } = useContext(MyContext);
  const togleFun = () => {
    setTogle(!togle);
  };
  const vediioFun = () => {
    setVedio(!vedio);
  };
  return (
    <div className='navbar bg-light '>
      <div className='flex  items-center justify-between  '>
        <div className='nav flex items-center '>
          <GiHamburgerMenu
            onClick={togleFun}
            className='nav__burger hidden md:block'
          />
          <NavLink to='/' className='pe-5 ps-5'>
            <div className="">
            <img className='' src={logo} alt='logo' />
         </div>
          </NavLink>
          <div className='nav__enner relative'>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              className='pe-10 md:pe-20   block nav__input max-w-[500px] '
              placeholder='Search'
            />
            <FiSearch className='absolute nav__log  right-3 md:right-7 top-4 ' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <MdVideoCall
            className=' nav__vedio none hidden md:block'
          />
          <div className='nav__qund hidden md:block'>
            <img className=' ps-1 ' src={userpic} alt='msv' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
