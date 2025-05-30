import { CirclePlus, CircleX, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/usLocalStorage";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { getLocalStorageItem, clearLocalStorageItem } = useLocalStorage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  console.log(isLoggedIn);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    const isConfirmed = confirm('Are you sure want to logout');
    if(isConfirmed) {
      console.log('logout');
      clearLocalStorageItem('isLoggedIn');
      clearLocalStorageItem('role');
      navigate('/');
      window.location.reload();
    }
  }

  return (
    <div className="main-header bg-[#F3F3F3] px-10 py-5 flex items-center justify-between border-b-2 border-b-[#E4E4E4]">
      <div className="main-header-title">
        <h1 className="text-[1.5rem] md:text-[2.3rem] font-bold text-[#009A4B] -mt-2">
          <Link to="/">Logo</Link>
        </h1>
      </div>

      <div className="navigation flex gap-4 items-center hidden lg:block">
        <ul className="flex gap-15 items-center">
          <Link
            to={"/"}
            className="relative nav-link text-[#009A4B] font-semibold text-[1.2rem] after:content-[''] after:w-full after:h-[0.2rem] after:absolute after:bg-[#009A4B] after:rounded-full after:left-0 after:-bottom-[2.1rem]"
          >
            <div>Jobs</div>
          </Link>
          <li className=" relative nav-link text-[#000000] font-normal text-[1.2rem] hover:text-[#009A4B] cursor-pointer">
            About us
          </li>
          {!isLoggedIn ? (
            <div className="flex items-center justify-between gap-5">
              <Link
                to="/register"
                className="px-[1rem] py-[0.5rem] rounded bg-[#009A4B] font-normal text-[1.2rem] text-[white] cursor-pointer"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-[1rem] py-[0.5rem] text-[#009A4B] bg-white rounded font-normal text-[1.2rem]"
              >
                Login
              </Link>
            </div>
          ) : (
            <>
              {getLocalStorageItem("role") === "Recruiter" && (
                <div className="flex items-center lg:gap-3">
                  <Link
                    to={"/add/job"}
                    className="post-job bg-[#00773A] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#FFFFFF] rounded-full flex items-center gap-3 hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out"
                  >
                    <CirclePlus className="mt-0.5" />
                    Post a job
                  </Link>
                </div>
              )}

              <div className="rounded-4xl p-4 bg-[#e2e2e2]" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
              </div>
            </>
          )}
        </ul>
      </div>

      {isNavOpen && (
        <div className="lg:hidden fixed top-0 bottom-0 left-0 w-full h-full z-40 px-[20px] bg-[#00773A]">
          <ul className="mt-[50px]">
            <Link
              to={"/"}
              className="relative nav-link text-[white] font-semibold text-[1.2rem]"
            >
              <h5 className="mb-[30px]">Jobs</h5>
            </Link>
            <li className="relative nav-link text-[white] font-semibold text-[1.2rem] mb-[30px]">
              About us
            </li>
          </ul>

          {!isLoggedIn ? (
            <div className="flex justify-between flex-col gap-5">
              <Link
                to="/register"
                className="px-[1rem] max-w-[200px] flex items-center justify-center py-[0.5rem] rounded bg-[#009A4B] font-normal text-[1.2rem] text-[white] cursor-pointer"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="max-w-[200px] flex items-center justify-center px-[1rem] py-[0.5rem] text-[#009A4B] bg-white rounded font-normal text-[1.2rem]"
              >
                Login
              </Link>
            </div>
          ) : (
            <>
              {getLocalStorageItem("role") === "Recruiter" && (
                <div className="flex items-center gap-3">
                <Link
                  to={"/add/job"}
                  className="post-job bg-[white] py-3 pt-2.5 px-10 font-semibold text-[1.2rem] text-[#00773A] rounded-full flex items-center gap-3 hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out flex items-center justify-center"
                >
                  <CirclePlus className="" />
                  Post a job
                </Link>
                <div className="rounded-4xl p-4 bg-[#e2e2e2]" onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                  </div>
                </div>
              )}
            </>
          )}

          <CircleX
            onClick={handleNav}
            className="absolute top-[20px] right-[40px]"
          />
        </div>
      )}

      <Menu className="md:hidden" onClick={handleNav} />
    </div>
  );
};

export default Navbar;
