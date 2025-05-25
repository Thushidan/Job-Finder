import { CirclePlus, CircleX, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='main-header bg-[#F3F3F3] px-10 py-5 flex items-center justify-between border-b-2 border-b-[#E4E4E4]'>
      <div className="main-header-title">
        <h1 className="text-[1.5rem] md:text-[2.3rem] font-bold text-[#009A4B] -mt-2">Logo</h1>
      </div>

      <div className='navigation flex gap-4 items-center hidden lg:block'>
        <ul className="flex gap-15 items-center">
          <Link to={'/'} className="relative nav-link text-[#009A4B] font-semibold text-[1.2rem] after:content-[''] after:w-full after:h-[0.2rem] after:absolute after:bg-[#009A4B] after:rounded-full after:left-0 after:-bottom-[2.1rem]">
            <div>Jobs</div>
          </Link>
          <li className=" relative nav-link text-[#000000] font-normal text-[1.2rem] hover:text-[#009A4B] cursor-pointer">About us</li>
          <Link to={'/add/job'} className='post-job bg-[#00773A] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#FFFFFF] rounded-full flex items-center gap-3 hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out'><CirclePlus className='mt-0.5' />Post a job</Link>
        </ul>
      </div>

      {
        isNavOpen && (
          <div className="lg:hidden fixed top-0 bottom-0 left-0 w-full h-full z-40 px-[20px] bg-[#00773A]">

            <ul className="mt-[50px]">
              <Link to={'/'} className="relative nav-link text-[white] font-semibold text-[1.2rem]">
                <h5 className='mb-[30px]'>Jobs</h5>
              </Link>
              <li className="relative nav-link text-[white] font-semibold text-[1.2rem] mb-[30px]">About us</li>
            </ul>

            <Link to={'/add/job'} className='post-job bg-[white] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#00773A] rounded-full flex items-center gap-3 hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out flex items-center justify-center'><CirclePlus className='' />Post a job</Link>

            <CircleX onClick={handleNav} className='absolute top-[20px] right-[40px]'/>

          </div>
        )
      }

      <Menu className='md:hidden' onClick={handleNav}/>

    </div>
  );
}

export default Navbar;