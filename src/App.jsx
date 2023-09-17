import "./App.css";
import Another from "./Components/Another/Another";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <section className="max-w-screen-xl mx-auto">
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Another></Another>
      </section>
    </>
  );
}

export default App;
