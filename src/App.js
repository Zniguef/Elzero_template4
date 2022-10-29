import * as React from "react";
import ls from "localstorage-slim";
import { Route, Routes } from "react-router-dom";
import Header from "./entrypoint/protectedApp/Header/header";
import SideMenu from "./entrypoint/protectedApp/SideMenu";
import { Routing } from "./entrypoint/Routes";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { DarkModeContext } from "./core/context/DarkModeContext";
import Projects from "./pages/projects";
import Show from "./core/Show";
import Login from "./pages/login";
import { loginAccounts } from "./core/data/login";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const MemoState = React.useMemo(() => isDarkMode, [isDarkMode]);
  const userToken = loginAccounts.find(
    (e) => e?.token === ls?.get("token", { decrypt: true })
  );
  const isLoggedIn = () => {
    if (userToken) return true;
    else {
      window.location.replace(Routing.login.path);
      return false;
    }
  };
  return (
    <DarkModeContext.Provider value={MemoState}>
      <Show if={window.location.pathname === Routing.login.path}>
        <div
          className={`${
            isDarkMode
              ? "bg-dark text-gray-200"
              : "bg-background-color text-black"
          } w-full overflow-hidden min-h-screen`}
        >
          <Routes>
            <Route path={Routing.login.path} element={<Login />} />
          </Routes>
        </div>
      </Show>

      <Show
        if={window.location.pathname !== Routing.login.path && isLoggedIn()}
      >
        <div className="flex w-screen overflow-hidden">
          <SideMenu />
          <div
            className={`${
              isDarkMode ? "bg-dark" : "bg-background-color"
            } w-full overflow-hidden`}
          >
            <Header setState={setIsDarkMode} />
            <div className=" p-6 overflow-auto current-page">
              <div className=" min-w-[600px]">
                <Routes>
                  <Route
                    path={Routing.dashboard.path}
                    element={<Dashboard />}
                  />
                  <Route path={Routing.settings.path} element={<Settings />} />
                  <Route path={Routing.profile.path} element={<Profile />} />
                  <Route path={Routing.projects.path} element={<Projects />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </DarkModeContext.Provider>
  );
}

export default App;
