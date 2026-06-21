import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your account and system preferences
          </p>
        </div>

        {/* Profile */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            👤 Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              defaultValue="Jiya Sinha"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              defaultValue="jiya@gmail.com"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="College ID"
              defaultValue="2026BT001"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              defaultValue="+91 9876543210"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

          </div>

          <button className="mt-5 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold">
            Save Profile
          </button>

        </div>

        {/* Security */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            🔐 Security
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="password"
              placeholder="Current Password"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

            <input
              type="password"
              placeholder="New Password"
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl"
            />

          </div>

          <button className="mt-5 bg-green-600 px-5 py-3 rounded-xl font-semibold">
            Change Password
          </button>

        </div>

        {/* Notifications */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            🔔 Notifications
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <span>Email Alerts</span>

              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={() => setEmailAlerts(!emailAlerts)}
                className="w-5 h-5"
              />

            </div>

            <div className="flex justify-between items-center">

              <span>SMS Alerts</span>

              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={() => setSmsAlerts(!smsAlerts)}
                className="w-5 h-5"
              />

            </div>

          </div>

        </div>

        {/* Appearance */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            🎨 Appearance
          </h2>

          <div className="flex justify-between items-center">

            <span>Dark Mode</span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5"
            />

          </div>

        </div>

        {/* Transport Preferences */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            🚌 Transport Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <select className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
              <option>Main Gate Route</option>
              <option>Hostel Route</option>
              <option>Library Route</option>
            </select>

            <select className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
              <option>Pickup Point A</option>
              <option>Pickup Point B</option>
              <option>Pickup Point C</option>
            </select>

          </div>

        </div>

        {/* System */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            💾 System Settings
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-cyan-600 px-5 py-3 rounded-xl">
              Export Data
            </button>

            <button className="bg-yellow-600 px-5 py-3 rounded-xl">
              Backup Records
            </button>

            <button className="bg-red-600 px-5 py-3 rounded-xl">
              Reset Settings
            </button>

          </div>

        </div>

      </div>
    </>
  );
}