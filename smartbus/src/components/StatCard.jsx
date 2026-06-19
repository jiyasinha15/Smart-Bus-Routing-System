export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-2xl ${color}`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-80">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>
    </div>
  );
}