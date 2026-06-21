import Sidebar from "../components/Sidebar";
import { FaBus, FaUserTie, FaTools } from "react-icons/fa";

const buses = [
  {
    id: 1,
    busNo: "U-12",
    driver: "Raj Kumar",
    capacity: 50,
    occupied: 45,
    status: "Running",
  },
  {
    id: 2,
    busNo: "U-18",
    driver: "Amit Singh",
    capacity: 45,
    occupied: 32,
    status: "Running",
  },
  {
    id: 3,
    busNo: "U-22",
    driver: "Rakesh Yadav",
    capacity: 40,
    occupied: 20,
    status: "Maintenance",
  },
];

export default function BusManagement() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              🚌 Bus Management
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor fleet health and bus operations
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold">
            + Add Bus
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Total Buses</p>
                <h2 className="text-4xl font-bold mt-2">24</h2>
              </div>
              <FaBus className="text-4xl text-cyan-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Active Drivers</p>
                <h2 className="text-4xl font-bold mt-2">20</h2>
              </div>
              <FaUserTie className="text-4xl text-green-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Maintenance</p>
                <h2 className="text-4xl font-bold mt-2">4</h2>
              </div>
              <FaTools className="text-4xl text-orange-400" />
            </div>
          </div>

        </div>

        {/* Search */}

        <div className="mb-8">

          <input
            type="text"
            placeholder="🔍 Search Bus..."
            className="w-full bg-white/5 border border-slate-700 rounded-2xl p-4 text-white outline-none"
          />

        </div>

        {/* Bus Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {buses.map((bus) => {

            const percentage =
              (bus.occupied / bus.capacity) * 100;

            return (
              <div
                key={bus.id}
                className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 transition-all duration-300"
              >

                <div className="flex justify-between items-center mb-4">

                  <h2 className="text-2xl font-bold">
                    🚌 {bus.busNo}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      bus.status === "Running"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {bus.status}
                  </span>

                </div>

                <p className="text-slate-300 mb-2">
                  👨‍✈️ Driver: {bus.driver}
                </p>

                <p className="text-slate-300 mb-4">
                  Capacity: {bus.occupied}/{bus.capacity}
                </p>

                {/* Progress Bar */}

                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-4">

                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    style={{ width: `${percentage}%` }}
                  />

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-cyan-400 font-semibold">
                    {Math.round(percentage)}% Occupied
                  </span>

                  <div className="space-x-2">

                    <button className="bg-cyan-600 px-4 py-2 rounded-lg">
                      Edit
                    </button>

                    <button className="bg-red-600 px-4 py-2 rounded-lg">
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </>
  );
}