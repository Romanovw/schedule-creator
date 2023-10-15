import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import DriversBasztowa from "./components/drivers-basztowa/DriversBasztowa";
import KitchenBasztowa from "./components/kitchen-basztowa/KitchenBasztowa";
import KitchenMackiewicza from "./components/kitchen-mackiewicza/KitchenMackiewicza";
import DriversMackiewicza from "./components/drivers-mackiewicza/DriversMackiewicza";


function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Routes>
          <Route path="/kitchen-basztowa" element={<KitchenBasztowa/>}/>
          <Route path="/drivers-basztowa" element={<DriversBasztowa/>}/>
          <Route path="/kitchen-mackiewicza" element={<KitchenMackiewicza/>}/>
          <Route path="/drivers-mackiewicza" element={<DriversMackiewicza/>}/>
        </Routes>
      </Router> 
    </div>
  );
}
export default App;
