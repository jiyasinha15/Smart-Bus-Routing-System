export default function Navbar() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700/5 backdrop-blur-xl border border-slate-700 shadow p-5 rounded-xl flex justify-between text-white  ">

      <h2 className="text-2xl font-bold">
        SmartBus Dashboard
      </h2>

      <div className="flex gap-4 items-center">
        <span>🔔</span>

        <img
          src="https://i.pravatar.cc/40"
          alt=""
          className="rounded-full"
        />
      </div>

    </div>
  );
}