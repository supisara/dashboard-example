import React, { useState } from "react";
import Headerbar from "../compomemts/Headerbar";
import Sidebar from "../compomemts/Sidebar";
import DashboardPage from "../pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import EcommercePage from "../pages/EcommercePage";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <React.Fragment>
      <Headerbar
        handleOpenSidebar={handleOpenSidebar}
        openSidebar={openSidebar}
      />
      <div className="flex">
        {openSidebar ? <Sidebar /> : ""}

        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/e-commerce" element={<EcommercePage />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
