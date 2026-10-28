import DroneCard from "./DroneCard";

// F1 · Show every drone, not just the first one.
// F3 · Add tabs to filter the fleet by status.
function FleetList({drones}) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-heading">Fleet</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {drones.map((drone) => (
                    <DroneCard drone={drone}/>
                ))}
            </div>
        </section>
    );
}

export default FleetList;
