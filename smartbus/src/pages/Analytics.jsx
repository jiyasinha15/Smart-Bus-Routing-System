import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ridershipData = [
  { day: "Mon", students: 850 },
  { day: "Tue", students: 920 },
  { day: "Wed", students: 1100 },
  { day: "Thu", students: 980 },
  { day: "Fri", students: 1200 },
];

const fuelData = [
  { month: "Jan", fuel: 1200 },
  { month: "Feb", fuel: 1100 },
  { month: "Mar", fuel: 950 },
  { month: "Apr", fuel: 850 },
  { month: "May", fuel: 780 },
];

export default function Analytics() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            📊 Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor transport performance and efficiency
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Total Trips</p>
            <h2 className="text-4xl font-bold mt-2">5,248</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Students Served</p>
            <h2 className="text-4xl font-bold mt-2">1,248</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Fuel Saved</p>
            <h2 className="text-4xl font-bold mt-2">18%</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">Efficiency Score</p>
            <h2 className="text-4xl font-bold mt-2">92%</h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Ridership */}

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Weekly Ridership
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={ridershipData}>

                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#06b6d4"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* Fuel */}

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Fuel Consumption
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={fuelData}>

                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip />

                <Bar
                  dataKey="fuel"
                  fill="#22c55e"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-4">
              🚌 Route Performance
            </h2>

            <ul className="space-y-3 text-slate-300">

              <li>Route A → 96% Efficiency</li>
              <li>Route B → 91% Efficiency</li>
              <li>Route C → 88% Efficiency</li>
              <li>Route D → 93% Efficiency</li>

            </ul>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-4">
              🎯 AI Insights
            </h2>

            <ul className="space-y-3 text-slate-300">

              <li>Fuel usage reduced by 18%</li>
              <li>Peak travel time: 8:00 AM</li>
              <li>Best route optimization on Route A</li>
              <li>Average occupancy: 87%</li>

            </ul>

          </div>

        </div>

      </div>
    </>
  );
}