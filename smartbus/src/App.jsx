import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LiveTracking from "./pages/LiveTracking";
import Analytics from "./pages/Analytics";
import RoutesPage from "./pages/Routes";
import Alerts from "./pages/Alerts";
import Students from "./pages/Students";
import Drivers from "./pages/DriverManagement";
import BusManagement from "./pages/BusManagement";
import Settings from "./pages/Settings";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Auth />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Live Tracking */}
        <Route
          path="/tracking"
          element={
            <PrivateRoute>
              <LiveTracking />
            </PrivateRoute>
          }
        />

        {/* Routes */}
        <Route
          path="/routes"
          element={
            <PrivateRoute>
              <RoutesPage />
            </PrivateRoute>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />

        {/* Alerts */}
        <Route
          path="/alerts"
          element={
            <PrivateRoute>
              <Alerts />
            </PrivateRoute>
          }
        />

        {/* Students */}
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />

        {/* Drivers */}
        <Route
          path="/drivers"
          element={
            <PrivateRoute>
              <Drivers />
            </PrivateRoute>
          }
        />

        {/* Buses */}
        <Route
          path="/buses"
          element={
            <PrivateRoute>
              <BusManagement />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;