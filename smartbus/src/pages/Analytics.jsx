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
  PieChart,
  Pie,
  Cell,
  Legend,
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

const fleetStatus = [
  { name: "Active", value: 24 },
  { name: "Maintenance", value: 3 },
  { name: "Offline", value: 2 },
];

const COLORS = ["#22c55e", "#eab308", "#ef4444"];


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

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">
            <p className="text-slate-400">Total Trips</p>
            <h2 className="text-4xl font-bold mt-2">5,248</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">
            <p className="text-slate-400">Students Served</p>
            <h2 className="text-4xl font-bold mt-2">1,248</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">
            <p className="text-slate-400">Fuel Saved</p>
            <h2 className="text-4xl font-bold mt-2">18%</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">
            <p className="text-slate-400">Efficiency Score</p>
            <h2 className="text-4xl font-bold mt-2">92%</h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Ridership */}

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">

            <h2 className="text-xl font-bold mb-5">
              Weekly Ridership
            </h2>

            <ResponsiveContainer width="100%" height={240}>

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

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">

            <h2 className="text-xl font-bold mb-5">
              Fuel Consumption
            </h2>

            <ResponsiveContainer width="100%" height={240}>

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

          <div className="grid lg:grid-cols-2 gap-6 mt-6 items-start">

            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 h-[380px] flex flex-col">

              <h2 className="text-xl font-bold mb-5">
                🚍 Fleet Status
              </h2>

              <div className="flex-1 flex items-center justify-center">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={fleetStatus}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                    >
                      {fleetStatus.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>



            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 h-[380px]">

              <h2 className="text-xl font-bold mb-4">
                🚌 Route Performance
              </h2>

              <div className="space-y-4 text-slate-300">

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Route A</span>
                    <span>96%</span>
                  </div>

                  <div className="h-2 bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-cyan-500 rounded-full"
                      style={{ width: "96%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Route B</span>
                    <span>91%</span>
                  </div>

                  <div className="h-2 bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-cyan-500 rounded-full"
                      style={{ width: "91%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Route C</span>
                    <span>88%</span>
                  </div>

                  <div className="h-2 bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-cyan-500 rounded-full"
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Route D</span>
                    <span>93%</span>
                  </div>

                  <div className="h-2 bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-cyan-500 rounded-full"
                      style={{ width: "93%" }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6 items-start">

            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:scale-105 transition-all duration-300">

              <h2 className="text-xl font-bold mb-4">
                🎯 AI Insights
              </h2>

              <div className="space-y-3">

                <div className="bg-green-500/20 p-3 rounded-xl">
                  ⛽ Fuel usage reduced by 18%
                </div>

                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  🕗 Peak travel time: 8:00 AM
                </div>

                <div className="bg-purple-500/20 p-3 rounded-xl">
                  🚍 Best optimization on Route A
                </div>

                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  👨‍🎓 Average occupancy: 87%
                </div>

              </div>

            </div>         

            {/* Download Report */}
            <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

              <h2 className="text-xl font-bold mb-4">
                📄 Download Report
              </h2>

              <div className="space-y-4">

                <button className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-xl font-semibold">
                  Download Performance Report
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold">
                  Download Fleet Report
                </button>

                <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold">
                  Download Fuel Report
                </button>

              </div>

            </div>

          </div>

        </div>
      
  
    </>
    );
}