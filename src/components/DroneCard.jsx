// F2 · Show the rest of the drone's details: model, status, battery,
// a low-battery warning and how much it can carry.
function DroneCard({drone}) {
    return (
        <article className="rounded-2xl border border-line bg-white p-5 shadow-sm shadow-black/[0.03]">
            <p className="font-mono text-xs text-ink-muted">{drone.id}</p>
            <h3 className="text-xl font-semibold tracking-tight text-heading">{drone.name}</h3>
            <p className=" text-sm text-gray-500"><span className=" font-bold">Model: </span>{drone.model}</p>
            <p className=" text-sm text-gray-500"><span className=" font-bold">Carries up to: </span>{drone.maxLoadKg}</p>
            {drone.battery <= 25 && (<p className=" text-sm text-yellow-400 font-bold">Battery low</p>)}
        </article>
    );
}

export default DroneCard;
