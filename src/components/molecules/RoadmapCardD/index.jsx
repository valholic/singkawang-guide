export default function RoadmapCardD({ day, index }) {
    return (
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out hover:scale-[1.01] ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="w-3/7 bg-white rounded-2xl shadow-md p-6 border border-yellow-100 hover:shadow-lg transition duration-500">
                <h3 className="text-2xl font-semibold text-yellow-700 text-center w-full mb-2">{day.day}</h3>
                {day.desc.map((des, i) => {
                    return <div key={i}>
                                <p className="text-gray-600 leading-relaxed font-semibold text-center">{day.places[i]}</p>
                                <p className="text-gray-600 leading-relaxed text-center text-sm">{des}</p>
                            </div>
                })}
            </div>
            <div className="w-3/7">
                <p className="text-gray-600 leading-relaxed text-sm text-center">Tip: <br />{day.tip}</p>
            </div>
        </div>
    )
}
