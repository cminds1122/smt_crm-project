import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import Alert from "../Alert/Alert";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>{children}</div>
        <div>
          <Alert text="A simple success alert—check it out!" type="danger" />
        </div>
      </div>
    </>
  );
};

export default Layout;
