import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/murlogo.png";
import { Link } from "react-scroll";
import Resume from "../assets/jideobi.pdf";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
          <Link to='home' smooth={true} duration={500}>
              <img className="hover:scale-110 duration-500" src={Logo} alt="logo" style={{ width: 180  }} />
          </Link>
      </div>

      {/* menu */}
      <ul className="hidden  md:flex">
        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Skill</Link></li>
        <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* hambuger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile / menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl"><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skill</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* social icon */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/jideobi-chebem-7aba10205">
            Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/jideobi?tab=projects">
                Github <FaGithub size={30} />
            </a>
          </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://mail.google.com/mail/u/0/#starred?compose=new">
            Email <HiOutlineMail size={30} />
            </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href={Resume} download='Resume'>
            Resume <BsFillPersonLinesFill size={30} />
            </a>
       </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;