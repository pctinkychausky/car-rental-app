import "./App.css";
import Feeds from "./components/Feeds/Feeds";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";

function App() {
  return (
    <div className="App">
      <Leftbar />
      <Feeds />
      <Rightbar />
    </div>
  );
}

export default App;
