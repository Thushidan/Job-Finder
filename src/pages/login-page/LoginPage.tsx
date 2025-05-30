import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userLogin from "../../services/userLogin/userLogin";
import Alert from "../../components/alert/Alert";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/usLocalStorage";
import Spinner from "../../components/spinner/Spinner";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { setIsLoggedIn } = useAuth();
  const { setLocalStorageItem } = useLocalStorage();

  const handleLogin = async () => {
    try {
      await userLogin({
        email: email,
        navigate: navigate,
        password: password,
        setIsError: setIsError,
        setIsLoading: setIsLoading,
        setIsSuccess: setIsSuccess,
        setIsLoggedIn: setIsLoggedIn,
        setLocalStorageItem: setLocalStorageItem,
      });
    } catch (error) {
      alert("Please enter valid credentails");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      {isLoading && (
        <div className="bg-[black]/50 fixed flex items-center justify-center top-0 left-0 z-10 w-full h-[100vh]">
          <Spinner />
        </div>
      )}
      {isSuccess && (
        <Alert
          isSuccess={true}
          title="Success"
          description="Login Successful"
        />
      )}
      {isError && (
        <Alert
          isError={true}
          title="Error"
          description="Login Failed. Please enter valid details"
        />
      )}
      <div className="bg-[url('https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="flex flex-col items-center justify-center px-[2rem]">
        <div>
          <h1 className="font-bold text-3xl md:text-6xl text-center gap-3 lg:mb-[40px]">
            Login
          </h1>
          <div className="flex gap-[20px] flex-col max-w-[500px] w-[400px]">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-1 px-[10px] py-[10px] rounded border-gray-300 outline-none"
              placeholder="Enter your email address"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-1 px-[10px] py-[10px] rounded border-gray-300 outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="w-full flex flex-col gap-[1rem] m-[1.5rem] mx-0">
            <button
              className="lg:mt-0 cursor-pointer px-[1rem] w-full py-[0.5rem] text-[white] bg-[#009A4B] rounded font-normal text-[1.2rem]"
              onClick={handleLogin}
            >
              Login
            </button>

            <Link to={'/register'} className="lg:mt-0 cursor-pointer px-[1rem] w-full py-[0.6rem] text-[white] bg-[#009A4B] rounded font-normal text-[1.2rem] text-center"
              onClick={handleLogin}
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
