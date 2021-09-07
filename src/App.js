import "./App.css";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Regulator from "./pages/regulator/regulator";
import Report from "./pages/reports/reports";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        <div className="pg">
          <div className="left">
            <SideBar />
          </div>
          <div className="right">
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/regulator" component={Regulator} />
              <Route exact path="/reports" component={Report} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
