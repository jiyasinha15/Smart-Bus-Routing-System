import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* LEFT SECTION */}

        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            🚌 SmartBus
          </h1>

          <p className="mt-4 text-lg opacity-90">
            AI Powered University Transport System
          </p>

          <div className="grid gap-4 mt-10">

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
              👨‍🎓 1200+ Students
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
              🚌 24 Active Buses
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
              📍 Real-Time Tracking
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
              ⛽ 18% Fuel Saved
            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-center mb-8">

            {isLogin
              ? "Welcome Back 👋"
              : "Create Account"}

          </h2>

          {/* Register Fields */}

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="College ID"
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          {/* Email */}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Register Extra Fields */}

          {!isLogin && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Role</option>
                <option>Student</option>
                <option>Driver</option>
                <option>Admin</option>
              </select>
            </>
          )}

          {/* Login Extras */}

          {isLogin && (
            <div className="flex justify-between items-center text-sm mb-5">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <button className="text-blue-600 hover:underline">
                Forgot Password?
              </button>

            </div>
          )}

          {/* Main Button */}

          <button
            className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>

          {/* Divider */}

          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-500">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Google Button */}

          <button
            className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition"
          >
            Continue with Google
          </button>

          {/* Switch */}

          <p className="text-center mt-6 text-gray-600">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-700 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}