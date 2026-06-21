import Sidebar from "../components/Sidebar";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";

const alerts = [
  {
    id: 1,
    title: "Route A Delayed",
    description: "Heavy traffic near Main Gate",
    type: "warning",
    time: "10 min ago",
  },
  {
    id: 2,
    title: "Bus U-22 Maintenance",
    description: "Scheduled maintenance started",
    type: "danger",
    time: "30 min ago",
  },
  {
    id: 3,
    title: "Fleet Healthy",
    description: "All active buses operating normally",
    type: "success",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Bus U-18 Reached Campus",
    description: "Students dropped successfully",
    type: "info",
    time: "2 hours ago",
  },
];

export default function Alerts() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              🚨 Alerts Center
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor important transport notifications
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold">
            + Create Alert
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Total Alerts</p>
                <h2 className="text-4xl font-bold mt-2">48</h2>
              </div>
              <FaBell className="text-4xl text-cyan-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Critical</p>
                <h2 className="text-4xl font-bold mt-2">6</h2>
              </div>
              <FaExclamationTriangle className="text-4xl text-red-400" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <div>
              <p className="text-slate-400">Resolved</p>
              <h2 className="text-4xl font-bold mt-2">42</h2>
            </div>
          </div>

        </div>

        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search alerts..."
            className="w-full bg-white/5 border border-slate-700 rounded-2xl p-4 text-white outline-none"
          />
        </div>

        {/* Alert Cards */}

        <div className="grid gap-5">

          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 transition-all duration-300"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-xl font-bold">
                    {alert.title}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {alert.description}
                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    alert.type === "success"
                      ? "bg-green-500/20 text-green-300"
                      : alert.type === "warning"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : alert.type === "danger"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-cyan-500/20 text-cyan-300"
                  }`}
                >
                  {alert.type}
                </span>

              </div>

              <div className="mt-4 flex justify-between items-center">

                <span className="text-slate-500 text-sm">
                  {alert.time}
                </span>

                <button className="bg-cyan-600 px-4 py-2 rounded-xl">
                  View
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}