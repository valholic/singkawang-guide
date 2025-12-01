export default function RoadmapCardM({ day }) {
    return (
        <div className="min-w-[90%] h-fit bg-white rounded-2xl shadow-md p-5 snap-center border border-yellow-100 transition-transform duration-700 hover:scale-[1.01]" >
            <h3 className="text-xl font-semibold text-yellow-700 mb-2 text-center">{day.day}</h3>
            {day.desc.map((des, i) => {
                return <div key={i}>
                    <p className="text-gray-600 leading-relaxed font-semibold text-center">{day.places[i]}</p>
                    <p className="text-gray-600 leading-relaxed text-center text-sm">{des}</p>
                </div>
            })}
            <p className="leading-relaxed text-center text-xs mt-4">Tip: {day.tip}</p>
        </div>
    )
}
