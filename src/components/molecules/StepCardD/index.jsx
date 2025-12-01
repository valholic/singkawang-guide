export default function StepCardD({ step, index }) {
    return (
        <div className={`flex items-center gap-8 transition-all duration-700 ease-in-out hover:scale-[1.01] ${ index % 2 === 0 ? "flex-row" : "flex-row-reverse" }`} >
            <div className="w-1/2">
                <img src={step.img} alt={step.title} className="rounded-2xl shadow-md w-full h-64 object-cover hover:brightness-110 transition duration-500" />
            </div>
            <div className="w-1/2 bg-white rounded-2xl shadow-md p-6 border border-yellow-100 hover:shadow-lg transition duration-500">
                <div className="flex items-center gap-3 mb-3">
                    {step.icon}
                    <h3 className="text-2xl font-semibold text-yellow-700">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
        </div>
    )
}
