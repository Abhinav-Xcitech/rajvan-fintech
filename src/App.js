import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Ribben from "./components/Ribben";
import Bubble from "./components/Bubble";
import Line from "./components/Line";
import CardView from "./components/CardView";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <Routes>
        <Route exact path="/" element={<Ribben />}/>
        <Route exact path="/Bubble" element={   <Bubble />}/>
        <Route exact path="/Line" element={   <Line />}/>
        <Route exact path="/Card" element={   <CardView />}/>
      </Routes>
    </Router>
  );
}

export default App;
