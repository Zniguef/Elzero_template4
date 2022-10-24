import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./entrypoint/protectedApp/Header/header";
import SideMenu from "./entrypoint/protectedApp/SideMenu";
import { Routing } from "./entrypoint/Routes";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="flex w-screen">
      <SideMenu />
      <div className="main-container">
        <Header />
        <Routes>
          <Route path={Routing.app.path} element={<Dashboard />} />
          <Route path={Routing.settings.path} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
