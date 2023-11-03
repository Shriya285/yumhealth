import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import { Banner_1 } from "./components/Banner";
import { Rectangle_1 } from "./components/Rectangle"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Rectangle_1 />
      <Banner_1 />
    </div>
  );
}

export default App;
