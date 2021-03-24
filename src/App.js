import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Search from "./Search";
import Results from "./Results";
import Bottom from "./Bottom";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Results />
        <Forecast />
        <Bottom />
      </div>
    </div>
  );
}
