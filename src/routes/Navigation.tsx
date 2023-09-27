import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />

            <ul>
              {routes.map((route, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={route.path}
                      className={({ isActive }: any) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.Component />}
                />
              );
            })}
            <Route
              path={"/*"}
              element={<Navigate to={routes[0].to} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
