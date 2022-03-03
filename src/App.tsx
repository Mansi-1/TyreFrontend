import React, { useState, useEffect } from "react";
// import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import TyreStockPCR from "./components/TyreStockPCR";
import TyreStockTruck from "./components/TyreStockTruck";
import TyreStockFarm from "./components/TyreStockFarm";

const App = () => {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"} style={{backgroundImage: `./download.jpeg`}}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/tyrestock/pcr" component={TyreStockPCR} />
          <Route path="/tyrestock/truck" component={TyreStockTruck} />
          <Route path="/tyrestock/farm" component={TyreStockFarm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
