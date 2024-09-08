import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { Header, Aboutme, Projects, Contacts } from './Components';

const App = () => {
  return(
    <div>
      <Header />
      <Aboutme />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
