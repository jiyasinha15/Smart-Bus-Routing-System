import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";


import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const initialBuses = [
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

const routes = [
  [
    [25.5941, 85.1376],
    [25.5980, 85.1420],
    [25.6030, 85.1480],
  ],
  [
    [25.5890, 85.1300],
    [25.5930, 85.1350],
    [25.6001, 85.1450],
  ],
];

const stops = [
  {
    name: "Main Gate",
    position: [25.5941, 85.1376],
  },
  {
    name: "Library",
    position: [25.5980, 85.1420],
  },
  {
    name: "Hostel",
    position: [25.6030, 85.1480],
  },
];

const busIcon = (busName) =>
  L.divIcon({
    html: `
      <div style="
        background:#06b6d4;
        color:white;
        padding:6px 12px;
        border-radius:20px;
        font-size:12px;
        font-weight:bold;
        border:2px solid white;
        box-shadow:0 4px 10px rgba(0,0,0,0.4);
        white-space:nowrap;
      ">
        🚌 ${busName}
      </div>
    `,
    className: "",
    iconSize: [80, 30],
    iconAnchor: [40, 15],
  });

export default function LiveTracking() {
  const [buses, setBuses] = useState(initialBuses);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBuses((prev) =>
        prev.map((bus) => ({
          ...bus,
          position: [
            bus.position[0] + (Math.random() - 0.5) * 0.001,
            bus.position[1] + (Math.random() - 0.5) * 0.001,
          ],
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const filteredBuses = buses.filter((bus) =>
    bus.name.toLowerCase().includes(search.toLowerCase())
  );

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

            <div className="flex items-center gap-2 mt-3">

              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

              <span className="text-green-400">
                Live GPS Tracking Active
              </span>

            </div>
          </div>

          <div className="flex gap-3">

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl hover:scale-105 transition">
              Refresh Location
            </button>

            <button
              onClick={() =>
                toast.error("🚨 Emergency Alert Sent!")
              }
              className="bg-red-600 px-5 py-3 rounded-xl hover:bg-red-700 transition"
            >
              🚨 SOS
            </button>

          </div>

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

        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search Bus (e.g. U-12)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500"
          />
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

                {routes.map((route, index) => (
                  <Polyline
                    key={index}
                    positions={route}
                    pathOptions={{
                      color: index === 0 ? "#06b6d4" : "#22c55e",
                      weight: 5,
                    }}
                  />
                ))}

                {stops.map((stop, index) => (
                  <Marker
                    key={index}
                    position={stop.position}
                  >
                    <Popup>
                      🛑 {stop.name}
                    </Popup>
                  </Marker>
                ))}

                {filteredBuses.map((bus) => (
                  <Marker
                    key={bus.id}
                    position={bus.position}
                    icon={busIcon(bus.name)}
                  >
                    <Popup>
                      <div className="text-sm">
                        <h3 className="font-bold text-lg">
                          🚌 {bus.name}
                        </h3>

                        <p>👨 Driver: {bus.driver}</p>

                        <p>👨‍🎓 Students: {bus.students}</p>

                        <p>
                          ⚡ Speed: {20 + Math.floor(Math.random() * 40)} km/h
                        </p>

                        <p className="text-green-600 font-semibold">
                          🟢 Running
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}

              </MapContainer>

            </div>

          </div>

          {/* Fleet */}

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

            <h2 className="text-xl font-bold mb-4">
              🚍 Active Fleet
            </h2>

            {filteredBuses.map((bus) => (
              <div
                key={bus.id}
                className="bg-slate-800/40 rounded-2xl p-4 mb-4"
              >

                <div className="flex justify-between mb-2">

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

                <p className="text-slate-400 text-sm mb-3">
                  Students: {bus.students}
                </p>

                <div className="flex justify-between text-sm mb-1">
                  <span>Occupancy</span>
                  <span>
                    {Math.round((bus.students / 50) * 100)}%
                  </span>
                </div>

                <div className="h-2 bg-slate-700 rounded-full">

                  <div
                    className="h-2 bg-cyan-500 rounded-full"
                    style={{
                      width: `${(bus.students / 50) * 100}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* Recent Updates */}

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

          {/* ETA */}

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

            <h2 className="text-xl font-bold mb-4">
              ⏱️ Estimated Arrival
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Bus U-12</span>
                <span className="text-green-400">
                  8 min
                </span>
              </div>

              <div className="flex justify-between">
                <span>Bus U-18</span>
                <span className="text-yellow-400">
                  12 min
                </span>
              </div>

              <div className="flex justify-between">
                <span>Bus U-22</span>
                <span className="text-cyan-400">
                  5 min
                </span>
              </div>

            </div>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-5 mt-6">

            <h2 className="text-xl font-bold mb-4">
              🤖 AI Traffic Intelligence
            </h2>

            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm mb-4">
              ● AI Engine Active
            </div>

            <div className="space-y-4">

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-4">
                <p className="text-cyan-400 font-semibold">
                  Route Analysis
                </p>

                <p className="text-slate-300 mt-2">
                  Route B is experiencing heavy traffic and
                  average delays of 12 minutes.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4">
                <p className="text-green-400 font-semibold">
                  Recommended Action
                </p>

                <p className="text-slate-300 mt-2">
                  Redirect Bus U-22 to Route B to reduce
                  passenger wait times.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4">
                <p className="text-purple-400 font-semibold">
                  Expected Impact
                </p>

                <p className="text-slate-300 mt-2">
                  🚀 Delay Reduction: 14%
                </p>

                <p className="text-slate-300">
                  ⛽ Fuel Savings: 8%
                </p>

                <p className="text-slate-300">
                  😊 Student Satisfaction: +11%
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}