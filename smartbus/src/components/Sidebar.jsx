import {
    FaBus,
    FaRoute,
    FaChartBar,
    FaMapMarkedAlt,
    FaBell,
    FaCog,
    FaUserTie,
    FaUserGraduate,
} from "react-icons/fa";


import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-72 h-screen bg-slate-950  border-r border-slate-800 text-white fixed">

            <div className="p-8 border-b border-slate-700">

                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    SmartBus AI
                </h1>

                <p className="text-slate-400 text-sm mt-2">
                    University Transport Platform
                </p>

            </div>

            <ul className="p-5 space-y-3">

                {/* Dashboard */}
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaBus />
                        Dashboard
                    </Link>
                </li>

                {/* Live Tracking */}
                <li>
                    <Link
                        to="/tracking"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaMapMarkedAlt />
                        Live Tracking
                    </Link>
                </li>

                {/* Routes */}
                <li>
                    <Link
                        to="/routes"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaRoute />
                        Routes
                    </Link>
                </li>

                {/* Analytics */}
                <li>
                    <Link
                        to="/analytics"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaChartBar />
                        Analytics
                    </Link>
                </li>

                {/* Alerts */}
                <li>
                    <Link
                        to="/alerts"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaBell />
                        Alerts
                    </Link>
                </li>

                <li>
                    <Link
                        to="/students"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaUserGraduate />
                        Students
                    </Link>
                </li>

                <li>
                    <Link
                        to="/drivers"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaUserTie />
                        Drivers
                    </Link>
                </li>

                <li>
                    <Link
                        to="/buses"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaBus />
                        Buses
                    </Link>
                </li>

                {/* Settings */}
                <li>
                    <Link
                        to="/settings"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
                    >
                        <FaCog />
                        Settings
                    </Link>
                </li>



            </ul>
        </div>
    );
}