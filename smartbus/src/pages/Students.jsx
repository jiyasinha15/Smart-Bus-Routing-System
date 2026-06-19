const students = [
  {
    id: 1,
    name: "Jiya Sinha",
    route: "Main Gate → Hostel A",
    bus: "U-12",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    route: "Library → Main Gate",
    bus: "U-18",
  },
  {
    id: 3,
    name: "Priya Singh",
    route: "Hostel A → Engineering Block",
    bus: "U-22",
  },
];

export default function Students() {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          👨‍🎓 Students
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Student
        </button>

      </div>

      <div className="bg-white rounded-xl shadow p-5">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Route</th>
              <th className="text-left py-3">Bus</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3">{student.name}</td>
                <td className="py-3">{student.route}</td>
                <td className="py-3">{student.bus}</td>

                <td className="py-3 space-x-2">

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}