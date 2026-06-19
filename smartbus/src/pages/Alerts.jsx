const alerts = [
  {
    id: 1,
    type: "Traffic",
    message: "Heavy traffic near Main Gate",
    time: "10 min ago",
  },
  {
    id: 2,
    type: "Maintenance",
    message: "Bus U-22 under maintenance",
    time: "30 min ago",
  },
  {
    id: 3,
    type: "Delay",
    message: "Route A delayed by 15 minutes",
    time: "1 hr ago",
  },
];

export default function Alerts() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        🔔 Alerts Center
      </h1>

      <div className="space-y-4">

        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">
              {alert.type}
            </h3>

            <p className="mt-2">
              {alert.message}
            </p>

            <span className="text-gray-500 text-sm">
              {alert.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}