import * as React from "react";
import ls from "localstorage-slim";
import MainTitle from "../../components/MainTitle";
import { DarkModeContext } from "../../core/context/DarkModeContext";
import { loginAccounts } from "../../core/data/login";
import { Routing } from "../../entrypoint/Routes";

function LoginPage() {
  const [loginVal, setLoginVal] = React.useState({
    userName: "",
    password: "",
  });
  const isDarkMode = React.useContext(DarkModeContext);
  localStorage.clear();

  function handleSubmit(e) {
    e.preventDefault();
    const userToken = loginAccounts?.find(
      (user) =>
        user?.userName === loginVal?.userName &&
        user?.password === loginVal?.password
    )?.token;
    if (userToken) {
      ls.set("token", userToken, { encrypt: true });
      window.location.replace(`${Routing.dashboard.path}`);
    } else {
      alert("UserName or password is invalid");
    }
  }

  return (
    <div
      className="w-full flex flex-col items-center 
      justify-center h-screen py-10 px-8"
    >
      <MainTitle title="Login" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="text-black flex flex-col gap-4 pb-28"
      >
        <label
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } p-0 m-0 mt-3`}
        >
          UserName :
        </label>
        <input
          onChange={(e) =>
            setLoginVal((prev) => ({ ...prev, userName: e.target.value }))
          }
          className={`${
            isDarkMode
              ? "bg-secondary-dark text-gray-300"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          type="text"
        />
        <label
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } p-0 m-0 mt-3`}
        >
          Password :
        </label>
        <input
          onChange={(e) =>
            setLoginVal((prev) => ({ ...prev, password: e.target.value }))
          }
          className={`${
            isDarkMode
              ? "bg-secondary-dark text-gray-300"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          type="password"
        />
        <input
          type="submit"
          value="Submit"
          className="rounded-md py-2 px-3 hover:bg-gray-400 cursor-pointer
          transition-all bg-gray-500 text-dark"
        />
      </form>
    </div>
  );
}

export default LoginPage;
