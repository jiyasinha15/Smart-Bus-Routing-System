export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${color}`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-WHITE/80">
            {title}
          </p>

          <h2 className="text-5xl font-extrabold mt-2 text-white">
            {value}
          </h2>

        </div>

        <div className="text-5xl text-white">
          {icon}
        </div>

      </div>
    </div>
  );
}