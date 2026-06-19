import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", students: 300 },
  { day: "Tue", students: 450 },
  { day: "Wed", students: 520 },
  { day: "Thu", students: 480 },
  { day: "Fri", students: 600 },
];

export default function Analytics() {
  return (
    <div className="bg-white p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-5">
        Weekly Ridership
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}