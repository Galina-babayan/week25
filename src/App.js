import "./App.css";

import Welcome from "./components/Welcome/Welcome";
import Chart1 from "./components/Chart1/Chart1";
import Chart2 from "./components/Chart2/Chart2";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Chart1 />
      <Chart2 />
    </div>
  );
}

export default App;
