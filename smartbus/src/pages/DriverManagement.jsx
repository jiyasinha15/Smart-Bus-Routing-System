import Sidebar from "../components/Sidebar";
import { FaUserTie, FaPhone, FaIdCard } from "react-icons/fa";

const drivers = [
  {
    id: 1,
    name: "Raj Kumar",
    phone: "+91 9876543210",
    license: "DL12345",
    status: "Available",
  },
  {
    id: 2,
    name: "Amit Singh",
    phone: "+91 9876543211",
    license: "DL67890",
    status: "On Route",
  },
  {
    id: 3,
    name: "Rakesh Yadav",
    phone: "+91 9876543212",
    license: "DL24680",
    status: "Leave",
  },
];

export default function Drivers() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              👨‍✈️ Driver Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage drivers and route assignments
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold">
            + Add Driver
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Total Drivers</p>
            <h2 className="text-4xl font-bold mt-2">20</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Available</p>
            <h2 className="text-4xl font-bold mt-2">15</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">On Route</p>
            <h2 className="text-4xl font-bold mt-2">5</h2>
          </div>

        </div>

        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search Driver..."
            className="w-full bg-white/5 border border-slate-700 rounded-2xl p-4 text-white outline-none"
          />
        </div>

        {/* Driver Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 transition-all duration-300"
            >

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold">
                  {driver.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    {driver.name}
                  </h2>

                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      driver.status === "Available"
                        ? "bg-green-500/20 text-green-300"
                        : driver.status === "On Route"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {driver.status}
                  </span>
                </div>

              </div>

              <div className="space-y-3">

                <p className="flex items-center gap-2 text-slate-300">
                  <FaPhone />
                  {driver.phone}
                </p>

                <p className="flex items-center gap-2 text-slate-300">
                  <FaIdCard />
                  {driver.license}
                </p>

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