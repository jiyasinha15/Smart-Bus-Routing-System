import Sidebar from "../components/Sidebar";
import { FaRoute, FaMapMarkerAlt, FaGasPump } from "react-icons/fa";

const routes = [
  {
    id: 1,
    start: "Main Gate",
    end: "Hostel A",
    distance: "12 KM",
    buses: 4,
    efficiency: "96%",
    fuelSaved: "18L",
  },
  {
    id: 2,
    start: "Library",
    end: "Engineering Block",
    distance: "8 KM",
    buses: 3,
    efficiency: "91%",
    fuelSaved: "12L",
  },
  {
    id: 3,
    start: "Hostel B",
    end: "Medical Block",
    distance: "10 KM",
    buses: 2,
    efficiency: "88%",
    fuelSaved: "9L",
  },
];

export default function RoutesPage() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              🗺️ Route Optimization
            </h1>

            <p className="text-slate-400 mt-2">
              Smart route planning and fuel optimization
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold">
            + Add Route
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Total Routes</p>
            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Active Buses</p>
            <h2 className="text-4xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Fuel Saved</p>
            <h2 className="text-4xl font-bold mt-2">18%</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Avg Efficiency</p>
            <h2 className="text-4xl font-bold mt-2">92%</h2>
          </div>

        </div>

        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search Routes..."
            className="w-full bg-white/5 border border-slate-700 rounded-2xl p-4 text-white outline-none"
          />
        </div>

        {/* Route Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold">
                  <FaRoute className="inline mr-2 text-cyan-400" />
                  Route {route.id}
                </h2>

                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                  {route.efficiency}
                </span>

              </div>

              <p className="text-slate-300 mb-3">
                <FaMapMarkerAlt className="inline mr-2 text-red-400" />
                {route.start}
              </p>

              <p className="text-slate-300 mb-4">
                <FaMapMarkerAlt className="inline mr-2 text-green-400" />
                {route.end}
              </p>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-slate-400">Distance</span>
                  <span>{route.distance}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Buses</span>
                  <span>{route.buses}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    <FaGasPump className="inline mr-1" />
                    Fuel Saved
                  </span>
                  <span className="text-green-400">
                    {route.fuelSaved}
                  </span>
                </div>

              </div>

              <div className="mt-5">

                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    style={{
                      width: route.efficiency,
                    }}
                  />

                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button className="flex-1 bg-cyan-600 py-2 rounded-xl">
                  Edit
                </button>

                <button className="flex-1 bg-red-600 py-2 rounded-xl">
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}