import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import SideBar from "./components/SideBar";
import { Header } from "./components/SideBar/style";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <Header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </Header>
        <SideBar children={showNav} />
        <div className="main">
          <Route path="/home" exact={true} component={Home} />
          <Route path="/perfil" exact={true} component={Profile} />
        </div>
      </Router>
    </>
  );
};

export default App;
