import Home from "./Components/Home";
import 'antd/dist/antd.css'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tool from "./Components/Tool";
import FleetSolution from "./Components/Solutions/FleetSolution";
import Remarkable_Platforms from "./Components/Solutions/Remarkable_Platforms";
import Insurance_Providers from "./Components/Solutions/Insurance_Providers";
import Service_Centers from "./Components/Solutions/Service_Centers";
import Careers from "./Components/Careers";
import Media from "./Components/Media";
import Leadership from "./Components/Leadership";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route key="/" path="/" exact  component={Home} />
          <Route path="/tool" key="/tool" exact  component={Tool} />
          <Route path="/fleet" key="/fleet" exact component={FleetSolution} />
          <Route path="/platform" key="/platform" exact component={Remarkable_Platforms} />
          <Route path="/insurance" key="/insurance" exact  component={Insurance_Providers}/>
          <Route path="/service" key="/service" exact component={Service_Centers} />
          <Route path="/career" key="/career" exact component={Careers} />
          <Route path="/media" key="/media" exact component={Media} />
          <Route path="/leader" key="/leader" exact component={Leadership} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
