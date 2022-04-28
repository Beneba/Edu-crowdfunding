import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";
import EduDetails from "./pages/EduDetails";
import DonatePage from "./pages/DonatePage";
import Payment from "./pages/Payment";
import './stylesheet/Layout.css';
import './stylesheet/EduDetails.css';
import './stylesheet/donation.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="EduDetails" exact element={<EduDetails />} />
          <Route path="DonatePage" exact element={<DonatePage />} />
          <Route path="Payment" exact element={<Payment />} />


        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
