import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import SideBar from "./components/SideBar";
import { Header } from "./components/SideBar/style";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import SignUp from "./pages/Landing/SignUp";

const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        {/* <Header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </Header>
   <SideBar children={showNav} />*/}
        <Route path="/perfil" exact={true} component={Profile} />
        <Route path="/home" exact={true} component={Home} />

        <div className="main">
          <Route path="/" exact={true} component={Landing} />
          <Route path="/cadastro" exact={true} component={SignUp} />
        </div>
      </Router>
    </>
  );
};

export default App;
