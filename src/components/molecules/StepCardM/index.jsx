export default function StepCardM({ step }) {
    return (
        <div className="min-w-[90%] bg-white rounded-2xl shadow-md p-5 snap-center border border-yellow-100 transition-transform duration-700 hover:scale-[1.01]"> 
            <img src={step.img} alt={step.title} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex items-center gap-3 mb-2">
                {step.icon}
                <h3 className="text-xl font-semibold text-yellow-700">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.desc}</p>
        </div>
    )
}
