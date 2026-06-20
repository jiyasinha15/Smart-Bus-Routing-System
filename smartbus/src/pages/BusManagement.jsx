import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function BusManagement() {
  const [buses, setBuses] = useState([
    {
      id: 1,
      busNo: "U-12",
      driver: "Raj Kumar",
      capacity: 50,
      status: "Running",
    },
    {
      id: 2,
      busNo: "U-18",
      driver: "Amit Singh",
      capacity: 45,
      status: "Running",
    },
    {
      id: 3,
      busNo: "U-22",
      driver: "Rakesh Yadav",
      capacity: 40,
      status: "Maintenance",
    },
  ]);

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          🚌 Bus Management
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Bus
        </button>

      </div>

      {/* Search */}

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Bus..."
          className="w-full md:w-80 border rounded-lg p-3"
        />
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Bus No</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Capacity</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

            {buses.map((bus) => (
              <tr
                key={bus.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{bus.busNo}</td>

                <td className="p-4">{bus.driver}</td>

                <td className="p-4">{bus.capacity}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      bus.status === "Running"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {bus.status}
                  </span>

                </td>

                <td className="p-4 space-x-2">

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