import React, { Component, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";

export const MainLyout = () => {
  //เลือกpartแรก
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Home");
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <div className="comtainer">
          <div className="row">
            <div className="col s12 m5 l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
