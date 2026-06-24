import { useState } from "react";


export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);


  const notifications = [
    "🚌 Bus U-12 reached Stop 3",
    "🚦 Heavy Traffic on Route B",
    "✅ Route A completed",
  ];
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700 shadow p-5 rounded-xl flex justify-between text-white  ">

      <h2 className="text-2xl font-bold">
        SmartBus Dashboard
      </h2>

      <div className="flex gap-4 items-center">
        <div className="relative">

          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative text-2xl hover:scale-110 transition"
          >
            🔔

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {notifications.length}
            </span>

          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-72 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl z-50">

              <h3 className="font-bold mb-3">
                Notifications
              </h3>

              <div className="space-y-3">

                <div className="bg-green-500/20 p-3 rounded-xl text-sm">
                  🚌 Bus U-12 reached Stop 3
                </div>

                <div className="bg-yellow-500/20 p-3 rounded-xl text-sm">
                  🚦 Heavy Traffic on Route B
                </div>

                <div className="bg-cyan-500/20 p-3 rounded-xl text-sm">
                  ✅ Route A completed
                </div>

              </div>

            </div>
          )}

        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt=""
          className="rounded-full"
        />
      </div>

      <div className="text-slate-300 font-medium">
        {new Date().toLocaleTimeString()}
      </div>

    </div>
  );
}