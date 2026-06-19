import { useState } from "react";

export default function DriverManagement() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Raj Kumar",
      phone: "9876543210",
      license: "DL12345",
      bus: "U-12",
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Singh",
      phone: "9876543211",
      license: "DL56789",
      bus: "U-18",
      status: "Active",
    },
    {
      id: 3,
      name: "Rakesh Yadav",
      phone: "9876543212",
      license: "DL98765",
      bus: "U-22",
      status: "On Leave",
    },
  ]);

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          👨‍✈️ Driver Management
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Driver
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Driver Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">License No.</th>
              <th className="p-4 text-left">Assigned Bus</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

            {drivers.map((driver) => (
              <tr
                key={driver.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{driver.name}</td>

                <td className="p-4">{driver.phone}</td>

                <td className="p-4">{driver.license}</td>

                <td className="p-4">{driver.bus}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      driver.status === "Active"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {driver.status}
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