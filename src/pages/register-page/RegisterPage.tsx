import { useState } from "react";
import registerUser from "../../services/registerUser/registerUser";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import Spinner from "../../components/spinner/Spinner";
import { roles } from "../../constants/role.constants";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleRegister = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRole = role.trim();
    if (
      trimmedEmail.length === 0 ||
      trimmedPassword.length === 0 ||
      trimmedRole.length === 0
    ) {
      alert("Please Enter Valid Details");
    } else {
      await registerUser({
        email: email,
        navigate: navigate,
        password: password,
        role: role,
        setEmail: setEmail,
        setIsError: setIsError,
        setIsLoading: setIsLoading,
        setIsSuccess: setIsSuccess,
        setPassword: setPassword,
        setRole: setRole,
      });
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
          description="Register Successful"
        />
      )}
      {isError && (
        <Alert
          isError={true}
          title="Error"
          description="Register Failed. Please enter valid details"
        />
      )}
      <div className="bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="flex items-center justify-center px-[2rem]">
        <div className="">
          <h1 className="font-bold text-3xl md:text-6xl text-center gap-3 lg:mb-[40px]">
            Register
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
              className="w-full border-1 px-[10px] py-[10px] rounded border-gray-300 outline-none"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              name="role"
              id="role"
              value={role}
              className="w-full border-1 px-[10px] py-[10px] rounded border-gray-300 outline-none appearance-none cursor-pointer"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles.map((role) => {
                return (
                  <option key={role.id} value={role.role}>
                    {role.role}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <button
              className="lg:mt-[40px] cursor-pointer px-[1rem] w-full py-[0.5rem] text-[white] bg-[#009A4B] rounded font-normal text-[1.2rem]"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
