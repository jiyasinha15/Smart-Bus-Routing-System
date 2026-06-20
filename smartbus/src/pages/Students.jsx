import Sidebar from "../components/Sidebar";

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
  {
    id: 4,
    name: "Aman Verma",
    route: "Main Gate → Block C",
    bus: "U-25",
  },
];

export default function Students() {
  return (
    <>
      <Sidebar />

      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              👨‍🎓 Student Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage student transportation records
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            + Add Student
          </button>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">
              Total Students
            </p>

            <h2 className="text-4xl font-bold mt-2">
              1248
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">
              Active Routes
            </p>

            <h2 className="text-4xl font-bold mt-2">
              8
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6">
            <p className="text-slate-400">
              Present Today
            </p>

            <h2 className="text-4xl font-bold mt-2">
              1103
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="🔍 Search Student..."
            className="w-full bg-white/5 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 text-white outline-none"
          />

        </div>

        {/* Student Table */}

        <div className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead className="border-b border-slate-700">

              <tr>
                <th className="p-5 text-left">Student</th>
                <th className="p-5 text-left">Route</th>
                <th className="p-5 text-left">Bus</th>
                <th className="p-5 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-800 hover:bg-white/5 transition-all duration-300"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
                        {student.name.charAt(0)}
                      </div>

                      <span>
                        {student.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-5">
                    {student.route}
                  </td>

                  <td className="p-5">

                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                      {student.bus}
                    </span>

                  </td>

                  <td className="p-5 space-x-2">

                    <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg">
                      Edit
                    </button>

                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}