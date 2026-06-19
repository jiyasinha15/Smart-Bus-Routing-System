import {
    FaBus,
    FaRoute,
    FaChartBar,
    FaMapMarkedAlt,
    FaBell,
    FaCog,
    FaUserTie,
} from "react-icons/fa";


import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-900 text-white fixed">

            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold">
                    🚌 SmartBus
                </h1>
            </div>

            <ul className="p-5 space-y-3">

                {/* Dashboard */}
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaBus />
                        Dashboard
                    </Link>
                </li>

                {/* Live Tracking */}
                <li>
                    <Link
                        to="/tracking"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaMapMarkedAlt />
                        Live Tracking
                    </Link>
                </li>

                {/* Routes */}
                <li>
                    <Link
                        to="/routes"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaRoute />
                        Routes
                    </Link>
                </li>

                {/* Analytics */}
                <li>
                    <Link
                        to="/analytics"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaChartBar />
                        Analytics
                    </Link>
                </li>

                {/* Alerts */}
                <li>
                    <Link
                        to="/alerts"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaBell />
                        Alerts
                    </Link>
                </li>

                <li>
                    <Link
                        to="/students"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        👨‍🎓 Students
                    </Link>
                </li>

                <li>
                    <Link
                        to="/drivers"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaUserTie />
                        Drivers
                    </Link>
                </li>

                <li>
                    <Link
                        to="/buses"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaBus />
                        Buses
                    </Link>
                </li>

                {/* Settings */}
                <li>
                    <Link
                        to="/settings"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
                    >
                        <FaCog />
                        Settings
                    </Link>
                </li>



            </ul>
        </div>
    );
}