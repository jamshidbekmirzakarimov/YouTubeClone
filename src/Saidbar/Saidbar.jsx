import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { FiCopy, FiFile, FiChevronDown } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { MyContext } from "../context/Context";
import { CiMusicNote1 } from "react-icons/ci";
import { useContext, useState } from "react";
import { SiTimescale } from "react-icons/si";
import { GrGamepad } from "react-icons/gr";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import shorts from "./img/shorts.svg";
import "./Saidbar.scss";
const Saidbar = () => {
  const { togle } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const openFun = () => {
    setOpen(!open);
  };
  return (
    <>
      {!togle ? (
        <div className={`minu`}>
          <div className="sideBar2">
         <NavLink to='/' className='bar__link flex items-center'>
            <AiOutlineHome className='icons' />
          </NavLink>

          <NavLink to='/shorts' className='bar__link flex items-center'>
            <DiCodeigniter className='icons' />
          </NavLink>

          <NavLink to='/pat' className='bar__link flex items-center pb-16'>
            <FiCopy className='icons' />
          </NavLink>

          <NavLink to='/biblet' className='bar__link flex items-center'>
            <VscFileSubmodule className='icons' />
          </NavLink>

          <NavLink to='/history' className='bar__link flex items-center'>
            <FiFile className='icons' />
          </NavLink>

          <NavLink to='/watch' className='bar__link flex items-center'>
            <SiTimescale className='icons' />
          </NavLink>

          <NavLink to='/favo' className='bar__link flex items-center'>
            <BsStar className='icons' />
          </NavLink>

          <NavLink to='/like' className='bar__link flex items-center'>
            <BiHeart className='icons' />
          </NavLink>

          <NavLink to='/music' className='bar__link flex items-center'>
            <CiMusicNote1 className='icons' />
          </NavLink>

          <NavLink to='/games' className='bar__link flex items-center'>
            <GrGamepad className='icons' />
          </NavLink>
          </div>
        </div>
      ) : (
          <div className={`bar `}>
          <NavLink to='/' className='bar__link flex items-center'>
            <AiOutlineHome className='icons' />
            <span className='bar__text block w-20'>Home</span>
          </NavLink>

          <NavLink to='/shorts' className='bar__link flex items-center'>
            <DiCodeigniter className='icons' />
            <span className='bar__text block w-20'>Trending</span>
          </NavLink>

          <NavLink to='/pat' className='bar__link flex items-center pb-16'>
            <FiCopy className='icons' />
            <span className='bar__text block w-28'>Subscriptions</span>
          </NavLink>

          <NavLink to='/biblet' className='bar__link flex items-center'>
            <VscFileSubmodule className='icons' />
            <span className='bar__text block w-20'>Library</span>
          </NavLink>

          <NavLink to='/history' className='bar__link flex items-center'>
            <FiFile className='icons' />
            <span className='bar__text block w-20'>History</span>
          </NavLink>

          <NavLink to='/watch' className='bar__link flex items-center'>
            <SiTimescale className='icons' />
            <span className='bar__text block w-24'>WatchLater</span>
          </NavLink>

          <NavLink to='/favo' className='bar__link flex items-center'>
            <BsStar className='icons' />
            <span className='bar__text block w-24'>Favourites</span>
          </NavLink>

          <NavLink to='/like' className='bar__link flex items-center'>
            <BiHeart className='icons' />
            <span className='bar__text block w-24'>LikedVideos</span>
          </NavLink>

          <NavLink to='/music' className='bar__link flex items-center'>
            <CiMusicNote1 className='icons' />
            <span className='bar__text block w-20'>Music</span>
          </NavLink>

          <NavLink to='/games' className='bar__link flex items-center'>
            <GrGamepad className='icons' />
            <span className='bar__text block w-20'>Games</span>
          </NavLink>
          </div>
         
     
      )}
      <div className='bg-inherit '>
        <div className={`minu1 py-3   fixed px-3 `}>
          <NavLink to='/' className=''>
            <AiOutlineHome className='icons1' />
          </NavLink>
          <NavLink to='shorts' className=''>
            <img className='icons1' src={shorts} alt='img' />
          </NavLink>
          <NavLink to='/pat' className=''>
            <MdSubscriptions className='icons1' />
          </NavLink>
          <NavLink to='/biblet' className=''>
            <MdOutlineVideoLibrary className='icons1' />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Saidbar;
