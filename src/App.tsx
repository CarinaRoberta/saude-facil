import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import SignUp from "./pages/Landing/SignUp";
import Exams from "./pages/Exams";
import ScheduledAppointment from "./pages/ScheduledAppointment";
import { ToastComponent } from "./components/Toast/Toast";


const App: React.FC = () => {
  return (
    <>
      <Router>
        <ToastComponent />
        {/* <Header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </Header>
   <SideBar children={showNav} />*/}
        <Route path="/perfil" exact={true} component={Profile} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/exames" exact={true} component={Exams} />
        <Route
          path="/consultas"
          exact={true}
          component={ScheduledAppointment}
        />

        <div className="main">
          <Route path="/" exact={true} component={Landing} />
          <Route path="/cadastro" exact={true} component={SignUp} />
        </div>
      </Router>
    </>
  );
};

export default App;
