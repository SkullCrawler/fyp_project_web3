import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// import { LoginPage } from "./scenes/loginPage";

const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch> */}
      <Services />
      <Transactions />
      <Footer />
    </div>
  </Router>
);

export default App;
