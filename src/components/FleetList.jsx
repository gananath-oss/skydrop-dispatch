import {useState} from "react";
import DroneCard from "./DroneCard";

// F1 · Show every drone, not just the first one.
// F3 · Add tabs to filter the fleet by status.
function FleetList({drones}) {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ['All', 'Available', 'Delivering', 'Charging'];

    const filteredDrones = activeTab === 'All' ? drones : drones.filter(drone => (
        drone.status.toLowerCase() === activeTab.toLowerCase()
    ))

    return (
        <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-heading">Fleet</h2>
            <div className=" flex space-x-2 border-b border-gray-200 pb-3">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none ${
                            activeTab === tab ? `bg-purple-700 text-white shadow-sm` : `bg-gray-50 text-gray-600 hover:bg-gray-600 hover:text-white`
                        }`}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredDrones.map((drone) => (
                    <DroneCard key={drone.id} drone={drone}/>
                ))}
            </div>
            {filteredDrones.length === 0 && (
                <li>
                    No drones found in this category
                </li>
            )}
        </section>
    );
}

export default FleetList;
