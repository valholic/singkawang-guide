export default function TransportCard({ item }) {
    return (
        <div className="min-w-[320px] bg-yellow-50 rounded-2xl shadow-md snap-center border border-yellow-100 hover:shadow-lg transition duration-500 hover:scale-[1.02]">
            <img src={item.img} alt={item.title} className="rounded-t-2xl h-48 w-full object-cover hover:brightness-110 transition duration-500" />
            <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-yellow-700">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
        </div>
    )
}
