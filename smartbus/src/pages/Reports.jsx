import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Reports() {



    const downloadFleetReport = () => {
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("SmartBus AI Fleet Report", 14, 20);

        doc.setFontSize(11);
        doc.text(
            `Generated: ${new Date().toLocaleDateString()}`,
            14,
            30
        );

        autoTable(doc, {
            startY: 40,
            head: [["Bus ID", "Status", "Driver", "Students"]],
            body: [
                ["U-12", "Active", "Raj Kumar", "45"],
                ["U-18", "Active", "Amit Singh", "32"],
                ["U-22", "Maintenance", "Rakesh Yadav", "20"],
            ],
        });

        doc.save("Fleet_Report.pdf");
    };

    const downloadPerformanceReport = () => {
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("SmartBus AI Performance Report", 14, 20);

        autoTable(doc, {
            startY: 35,
            head: [["Route", "Efficiency", "Trips", "Occupancy"]],
            body: [
                ["Route A", "96%", "1240", "92%"],
                ["Route B", "91%", "1100", "88%"],
                ["Route C", "88%", "980", "85%"],
                ["Route D", "93%", "1120", "90%"],
            ],
        });

        doc.save("Performance_Report.pdf");
    };


    const downloadFuelReport = () => {
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("SmartBus AI Fuel Report", 14, 20);

        autoTable(doc, {
            startY: 35,
            head: [["Month", "Fuel Used (L)", "Savings"]],
            body: [
                ["January", "1200", "5%"],
                ["February", "1100", "8%"],
                ["March", "950", "12%"],
                ["April", "850", "15%"],
                ["May", "780", "18%"],
            ],
        });

        doc.save("Fuel_Report.pdf");
    };


    return (
        <>
            <Sidebar />

            <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8">

                <h1 className="text-4xl font-bold mb-2">
                    📄 PDF Reports
                </h1>

                <p className="text-slate-400 mb-8">
                    Generate and download transport analytics reports
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white/5 border border-slate-700 rounded-3xl p-6">
                        <h2 className="text-xl font-bold mb-3">
                            🚍 Fleet Report
                        </h2>

                        <p className="text-slate-400 mb-5">
                            Download complete fleet status report.
                        </p>

                        <button
                            onClick={downloadFleetReport}
                            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl"
                        >
                            Download PDF
                        </button>
                    </div>

                    <div className="bg-white/5 border border-slate-700 rounded-3xl p-6">
                        <h2 className="text-xl font-bold mb-3">
                            📊 Performance Report
                        </h2>

                        <p className="text-slate-400 mb-5">
                            Route efficiency and analytics report.
                        </p>

                        <button
                            onClick={downloadPerformanceReport}
                            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
                        >
                            Download PDF
                        </button>
                    </div>

                    <div className="bg-white/5 border border-slate-700 rounded-3xl p-6">
                        <h2 className="text-xl font-bold mb-3">
                            ⛽ Fuel Report
                        </h2>

                        <p className="text-slate-400 mb-5">
                            Fuel usage and savings report.
                        </p>

                        <button
                            onClick={downloadFuelReport}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 py-3 rounded-xl"
                        >
                            Download PDF
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}
