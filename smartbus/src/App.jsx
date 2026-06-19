import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LiveTracking from "./pages/LiveTracking";
import Analytics from "./pages/Analytics";
import RoutesPage from "./pages/Routes";
import Students from "./pages/Students";
import BusManagement from "./pages/BusManagement";
import Alerts from "./pages/Alerts";
import DriverManagement from "./pages/DriverManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Auth />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tracking" element={<LiveTracking />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/routes" element={<RoutesPage />} />

        <Route path="/students" element={<Students />} />

        <Route path="/buses" element={<BusManagement />} />

        <Route path="/alerts" element={<Alerts />} />

        <Route path="/drivers" element={<DriverManagement />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;