import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./styles/tailwindcss/components/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Navbar from "./hooks/components/Navbar"
import Square from "./styles/styled-component/components/Square";
import { Square2 } from "./styles/styled-component/components/square2";
import {ContactComposition} from "./components/Contact";
import { Contact1 } from "./styles/styled-component/components/contact1/index";




function App() {
  return (
    <body>
        <Contact1/>
    </body>
  );
}

export default App;
