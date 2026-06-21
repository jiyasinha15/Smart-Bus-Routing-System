import Sidebar from "../components/Sidebar";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const buses = [
  {
    id: 1,
    name: "U-12",
    position: [25.5941, 85.1376],
    driver: "Raj Kumar",
    students: 45,
  },
  {
    id: 2,
    name: "U-18",
    position: [25.6001, 85.1450],
    driver: "Amit Singh",
    students: 32,
  },
  {
    id: 3,
    name: "U-22",
    position: [25.5890, 85.1300],
    driver: "Rakesh Yadav",
    students: 20,
  },
];

export default function LiveTracking() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              🗺️ Live Tracking
            </h1>

            <p className="text-slate-400 mt-2">
              Real-time monitoring of university buses
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl">
            Refresh Location
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Active Buses</p>
            <h2 className="text-4xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Students Onboard</p>
            <h2 className="text-4xl font-bold mt-2">862</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Routes Running</p>
            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>

        </div>

        {/* Map + Fleet */}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Map */}

          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-4">

            <h2 className="text-xl font-bold mb-4">
              📍 Live Fleet Map
            </h2>

            <div className="h-[500px] rounded-2xl overflow-hidden">

              <MapContainer
                center={[25.5941, 85.1376]}
                zoom={13}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >

                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {buses.map((bus) => (
                  <Marker
                    key={bus.id}
                    position={bus.position}
                  >
                    <Popup>
                      <b>{bus.name}</b>
                      <br />
                      Driver: {bus.driver}
                      <br />
                      Students: {bus.students}
                    </Popup>
                  </Marker>
                ))}

              </MapContainer>

            </div>

          </div>

          {/* Fleet Status */}

          <div className="space-y-5">

            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

              <h2 className="text-xl font-bold mb-4">
                🚍 Active Fleet
              </h2>

              {buses.map((bus) => (
                <div
                  key={bus.id}
                  className="mb-4 border-b border-slate-700 pb-4"
                >

                  <div className="flex justify-between">

                    <h3 className="font-bold">
                      {bus.name}
                    </h3>

                    <span className="text-green-400">
                      Online
                    </span>

                  </div>

                  <p className="text-slate-400 text-sm">
                    Driver: {bus.driver}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Students: {bus.students}
                  </p>

                </div>
              ))}

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

              <h2 className="text-xl font-bold mb-4">
                🚨 Recent Updates
              </h2>

              <div className="space-y-3">

                <div className="bg-green-500/20 p-3 rounded-xl">
                  Bus U-12 reached Stop 3
                </div>

                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  Heavy Traffic on Route B
                </div>

                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  New Route Assigned
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}