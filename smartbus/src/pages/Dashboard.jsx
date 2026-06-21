import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

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

const buses = [
    {
        id: 1,
        name: "Bus U-12",
        position: [25.5941, 85.1376],
    },
    {
        id: 2,
        name: "Bus U-18",
        position: [25.6041, 85.1476],
    },
    {
        id: 3,
        name: "Bus U-22",
        position: [25.5841, 85.1276],
    },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

            <Sidebar />

            <div className="ml-72 p-6 text-white">

                <Navbar />

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-white">
                        Smart Transport Dashboard
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Monitor routes, buses, drivers and fuel efficiency
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                        <span className="text-green-400 font-medium">
                            Live Monitoring Active
                        </span>
                    </div>

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

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-2xl p-5 shadow md:col-span-2">


                        <h2 className="text-xl font-bold mb-4">
                            Weekly Ridership
                        </h2>

                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <XAxis
                                    dataKey="day"
                                    stroke="#94a3b8"
                                />

                                <YAxis
                                    stroke="#94a3b8"
                                />

                                <Tooltip />

                                <Area
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#06b6d4"
                                    fill="#06b6d4"
                                    fillOpacity={0.25}
                                />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-2xl p-5 shadow">

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

                    {/* Live Fleet Map */}

                    <div className="md:col-span-2 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">

                        <h2 className="text-xl font-bold text-white mb-4">
                            🗺️ Live Fleet Map
                        </h2>

                        <div className="h-[500px] rounded-2xl overflow-hidden">

                            <MapContainer
                                center={[25.5941, 85.1376]}
                                zoom={13}
                                style={{ height: "100%", width: "100%" }}
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
                                            <div>
                                                <h3 className="font-bold">
                                                    {bus.name}
                                                </h3>

                                                <p>
                                                    Status: Running 🟢
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}

                            </MapContainer>

                        </div>

                    </div>



                    {/* Recent Alerts */}

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">

                        <h2 className="text-xl font-bold text-white mb-4">
                            🚨 Recent Alerts
                        </h2>

                        <div className="space-y-4">

                            <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl text-white">
                                ⚠ Route A Delayed by 15 mins
                            </div>

                            <div className="bg-yellow-500/20 border border-yellow-500 p-4 rounded-xl text-white">
                                🚦 Heavy Traffic Near Main Gate
                            </div>

                            <div className="bg-blue-500/20 border border-blue-500 p-4 rounded-xl text-white">
                                🔔 New Route Schedule Uploaded
                            </div>

                            <div className="bg-green-500/20 border border-green-500 p-4 rounded-xl text-white">
                                ✅ Fleet Operating Normally
                            </div>

                        </div>

                    </div>

                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        🚌 Fleet Status
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl">

                            <div>
                                <h3 className="font-semibold">Bus U-12</h3>
                                <p className="text-slate-400 text-sm">
                                    Raj Kumar
                                </p>
                            </div>

                            <span className="text-green-400 font-semibold">
                                Running
                            </span>

                        </div>
                        <div className="mt-2 h-2 bg-slate-700 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full w-[90%]"></div>
                        </div>

                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl">

                            <div>
                                <h3 className="font-semibold">Bus U-18</h3>
                                <p className="text-slate-400 text-sm">
                                    Amit Singh
                                </p>
                            </div>

                            <span className="text-green-400 font-semibold">
                                Running
                            </span>

                        </div>

                        <div className="mt-2 h-2 bg-slate-700 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full w-[85%]"></div>
                        </div>

                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl">

                            <div>
                                <h3 className="font-semibold">Bus U-22</h3>
                                <p className="text-slate-400 text-sm">
                                    Rakesh Yadav
                                </p>
                            </div>

                            <span className="text-yellow-400 font-semibold">
                                Maintenance
                            </span>

                        </div>
                        <div className="mt-2 h-2 bg-slate-700 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full w-[60%]"></div>
                        </div>

                    </div>



                </div>



                <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        ⚡ Recent Activity
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span>Bus U-12 Started Route</span>
                            <span className="text-slate-400">2m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Driver Assigned</span>
                            <span className="text-slate-400">10m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Route B Optimized</span>
                            <span className="text-slate-400">25m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Fuel Report Generated</span>
                            <span className="text-slate-400">1h ago</span>
                        </div>

                    </div>

                </div>


                <div className="grid md:grid-cols-4 gap-5 mt-6">

                    <button className="bg-cyan-600 p-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                        ➕ Add Bus
                    </button>

                    <button className="bg-purple-600 p-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                        👨‍✈️ Add Driver
                    </button>

                    <button className="bg-orange-600 p-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                        🛣️ Add Route
                    </button>

                    <button className="bg-red-600 p-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                        🚨 Create Alert
                    </button>

                </div>

                <div className="grid md:grid-cols-4 gap-5 mt-6">

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                        <p className="text-slate-400">On-Time Rate</p>
                        <h2 className="text-4xl font-bold text-green-400 mt-2">
                            96%
                        </h2>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                        <p className="text-slate-400">Fuel Efficiency</p>
                        <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                            18%
                        </h2>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                        <p className="text-slate-400">Route Accuracy</p>
                        <h2 className="text-4xl font-bold text-purple-400 mt-2">
                            92%
                        </h2>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                        <p className="text-slate-400">Student Rating</p>
                        <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                            4.8★
                        </h2>
                    </div>

                </div>

                <div className="mt-6">

                    <h2 className="text-2xl font-bold mb-5">
                        🤖 AI Insights
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                            ✅ Route A is performing at 96% efficiency
                        </div>

                        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                            ⛽ Fuel consumption reduced by 18%
                        </div>

                        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                            👨‍🎓 Peak ridership time is 8:00 AM
                        </div>

                        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-5">
                            🚌 Fleet utilization increased by 12%
                        </div>

                    </div>

                </div>
                <div className="text-center text-slate-500 py-10">
                    SmartBus AI © 2026 | AI Powered University Transport System
                </div>

            </div>

        </div>


    );
}