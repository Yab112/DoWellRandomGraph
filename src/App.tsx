import { FaChartBar, FaDownload } from "react-icons/fa";
import Header from "./component/Header";
import InputField from "./component/InputField";
import { Radial } from "./component/Radial";
import { FaRightFromBracket } from "react-icons/fa6";
import { useState } from "react";
import {LineGraph} from "./component/LineGraph";
import { BarGraph } from "./component/BarGraph";
import { DonutChart } from "./component/DonutChart";

// Dummy components for demonstration
// const BarChart = () => <div className="text-white">BarChart Component</div>;
// const DonutChart = () => <div className="text-white">DonutChart Component</div>;
// const LineChart = () => <div className="text-white">LineChart Component</div>;

export default function App() {
  const [graph, setGraph] = useState("graph4");

  const handleGraphChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGraph(e.target.value);
  };
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black  w-full md:flex flex-between gap-10 flex-col items-center p-8">
      <div className="flex flex-col mx-10 my-10 w-[90%] max-w-6xl lg:flex-col">
        <Header />
        <div className="flex justify-between mt-10 flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex flex-col gap-6 w-full md:w-[50%] p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg h-[580px]">
            <div className="p-4 bg-gray-900 rounded-md w-full flex items-center gap-2">
              <FaRightFromBracket className="text-slate-300 text-2xl animate-bounce" />
              <h1 className="text-center font-semibold text-gray-600 text-xl">
                Field Random Points
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <InputField label="Side" />
              <InputField label="Selection" />
              <InputField label="Choice" />
              <InputField label="Value" />
            </div>
            <button className="text-bold text-slate-300 bg-black p-4 px-5  self-end rounded-md">
              Send
            </button>
            <div className="p-4 bg-gray-900 rounded-md w-full flex items-center gap-2">
              <FaRightFromBracket className="text-slate-300 text-2xl animate-bounce" />
              <h1 className="text-center font-semibold text-gray-600 text-xl">
                Excel Random Points
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <InputField label="Side" />
              <InputField label="Selection" />\
            </div>
            <button className="text-bold text-slate-300 bg-black p-4 px-5  self-end rounded-md">
              Send
            </button>
          </div>
          

          {/* Visualization Section */}
          <div className="flex flex-col gap-6 w-full md:w-[50%]">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md flex gap-4 items-center shadow-lg">
              <FaChartBar className="text-4xl text-white" />
              <h1 className="text-center font-semibold text-white text-3xl">
                Random Points Visualization
              </h1>
            </div>

            {/* Radial Graph */}
            <div className="w-full h-[600px] flex flex-col justify-center items-center bg-gray-800 rounded-lg shadow-lg gap-4">
              <h2 className="text-xl font-bold text-white">Select a Graph</h2>
              <select
                name="graph"
                id="graph"
                className="bg-gray-500 rounded-md p-2 w-48 text-bold text-white"
                onChange={handleGraphChange} // Use onChange for immediate update
                value={graph}
              >
                <option value="graph1">BarChart</option>
                <option value="graph2">DonutChart</option>
                <option value="graph3">LineChart</option>
                <option value="graph4">Scatter (Radial)</option>
              </select>
              <p className="text-gray-300 mb-4">Choose a graph type to visualize your data</p>
              {graph === "graph1" && <BarGraph />}
              {graph === "graph2" && <DonutChart />}
              {graph === "graph3" && <LineGraph />}
              {graph === "graph4" && <Radial />}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-4 px-9 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg justify-between items-center">
        <p className="text-xl text-slate-700 font-bold">Download PDF</p>
        <FaDownload className="text-2xl border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300 ease-in-out" />
      </div>
    </section>
  );
}
