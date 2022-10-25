import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./entrypoint/protectedApp/Header/header";
import SideMenu from "./entrypoint/protectedApp/SideMenu";
import { Routing } from "./entrypoint/Routes";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { DarkModeContext } from "./core/context/DarkModeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const MemoState = React.useMemo(() => isDarkMode, [isDarkMode]);
  return (
    <DarkModeContext.Provider value={MemoState}>
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
                <Route path={Routing.app.path} element={<Dashboard />} />
                <Route path={Routing.settings.path} element={<Settings />} />
                <Route path={Routing.profile.path} element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
