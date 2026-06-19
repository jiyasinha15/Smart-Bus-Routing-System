import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function LiveTracking() {

  const position = [25.5941, 85.1376];

  return (
    <div className="bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="ml-64 p-6">

        <Navbar />

        <div className="bg-white mt-6 rounded-xl overflow-hidden shadow">

          <MapContainer
            center={position}
            zoom={13}
            style={{
              height: "600px",
              width: "100%",
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                Bus U12
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </div>
    </div>
  );
}