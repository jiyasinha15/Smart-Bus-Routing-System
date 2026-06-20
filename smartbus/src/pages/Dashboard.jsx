import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import {
    FaBus,
    FaUsers,
    FaRoute,
    FaGasPump,
} from "react-icons/fa";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    { day: "Mon", students: 300 },
    { day: "Tue", students: 450 },
    { day: "Wed", students: 500 },
    { day: "Thu", students: 420 },
    { day: "Fri", students: 600 },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

            <Sidebar />

            <div className="ml-72 p-6 text-black">

                <Navbar />

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-white">
                        Smart Transport Dashboard
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Monitor routes, buses, drivers and fuel efficiency
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-4 gap-5 mt-6">

                    <StatCard
                        title="Fleet Size"
                        value="24"
                        icon={<FaBus />}
                        color="bg-gradient-to-r from-blue-600 to-cyan-500"
                    />

                    <StatCard
                        title="Students"
                        value="1248"
                        icon={<FaUsers />}
                        color="bg-gradient-to-r from-purple-600 to-pink-500"
                    />

                    <StatCard
                        title="Routes"
                        value="8"
                        icon={<FaRoute />}
                        color="bg-gradient-to-r from-orange-500 to-red-500"
                    />

                    <StatCard
                        title="Fuel Saved"
                        value="18%"
                        icon={<FaGasPump />}
                        color="bg-gradient-to-r from-green-500 to-emerald-600"
                    />

                </div>

                {/* Chart + Weather */}

                <div className="grid md:grid-cols-3 gap-6 mt-6">

                    <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 shadow md:col-span-2">

                        <h2 className="text-xl font-bold mb-4">
                            Weekly Ridership
                        </h2>

                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <XAxis dataKey="day" />
                                <XAxis
                                    dataKey="day"
                                    stroke="#94a3b8"
                                />

                                <YAxis
                                    stroke="#94a3b8"
                                />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="students"
                                />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 shadow">

                        <h2 className="text-xl font-bold">
                            Weather
                        </h2>

                        <div className="mt-6 text-center">
                            <h1 className="text-5xl">
                                ☀️
                            </h1>

                            <p className="text-3xl mt-4">
                                31°C
                            </p>

                            <p className="text-gray-500">
                                Patna
                            </p>
                        </div>

                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">

                    <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

                        <h2 className="text-xl font-bold text-white mb-4">
                            🗺️ Live Fleet Map
                        </h2>

                        <div className="h-[350px] rounded-2xl overflow-hidden">
                            {/* MapContainer yaha */}
                        </div>

                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5">

                        <h2 className="text-xl font-bold text-white mb-4">
                            🚨 Recent Alerts
                        </h2>

                        <div className="space-y-3">

                            <div className="bg-red-500/20 border border-red-500 p-3 rounded-xl text-white">
                                Route A delayed
                            </div>

                            <div className="bg-yellow-500/20 border border-yellow-500 p-3 rounded-xl text-white">
                                Heavy Traffic
                            </div>

                            <div className="bg-green-500/20 border border-green-500 p-3 rounded-xl text-white">
                                Fleet Healthy
                            </div>

                        </div>

                    </div>

                </div>

                {/* Table + Alerts */}

                <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 shadow">

                    <h2 className="text-xl font-bold mb-4">
                        Recent Alerts
                    </h2>

                    <div className="space-y-4">

                        <div className="bg-red-200 p-3 rounded text-black">
                            ⚠ Heavy Traffic Near Main Gate
                        </div>

                        <div className="bg-yellow-200 p-3 rounded text-black">
                            ⚠ Route A Delayed
                        </div>

                        <div className="bg-blue-200 p-3 rounded text-black">
                            ℹ New Schedule Uploaded
                        </div>

                    </div>

                </div>

            </div>

        </div>

        
    );
}