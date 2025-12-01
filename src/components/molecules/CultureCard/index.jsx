export default function CultureCard({ culture, handleFlipped, flipped }) {
    return (
        <div key={culture.id} className="w-full h-96" onClick={() => handleFlipped(flipped === culture.id ? null : culture.id) } >
            <div className={`relative w-full h-full duration-700 transform-3d ${ flipped === culture.id ? "rotate-y-180" : "" }`} >
                {/* Front Side */}
                <div className="pointer-events-auto absolute w-full h-full backface-hidden bg-white/20 rounded-lg shadow-lg cursor-pointer overflow-hidden bg-cover bg-center bg-blend-overlay flex items-end" style={{backgroundImage: `url('${culture.image}')`}}>
                    <div className="p-4">
                        <h2 className="font-semibold text-slate-100 text-2xl text-shadow-black text-shadow-sm">{culture.name}</h2>
                    </div>
                </div>
                {/* Back Side */}
                <div className="pointer-events-auto absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-50 rounded-lg shadow-lg p-4 overflow-auto text-black">
                    <h2 className="text-xl font-semibold mb-2">{culture.name}</h2>
                    <p className="text-sm text-gray-700 mb-2">{culture.description}</p>
                    <p className="text-sm font-medium">Date/Time: {culture.date}</p>
                </div>
            </div>
        </div>
    )
}
