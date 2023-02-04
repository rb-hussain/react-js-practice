import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../src/components/homePage/Home"
import Navigation from "./components/header/Navigation";
import MainRouter from "./components/router/MainRouter";
export default function App() {
  return (
    <>
    <Navigation />
    <MainRouter />
    </>
  );
};
