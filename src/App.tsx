import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Default from "./components/Default";
import Scheduling from "./components/Scheduling";
import Appointments from "./components/Appointments";

const App = () => {
  return (
    // initialize default page before other pages to prevent screen fitting issues
    <Router>
      <Routes>
        <Route path="/" element={<Default />}/>
      </Routes>
      <div className="min-h-screen flex justify-center items-center">
        <div className="space-y-5 text-center gap-5">
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Scheduling" element={<Scheduling />}/>
            <Route path="/Appointments" element={<Appointments />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
