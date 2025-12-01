export default function CultureArticle({ icon, title, desc, dest }) {
    return (
        <div className="p-6 rounded-2xl bg-white shadow-sm text-center">
            <div className="text-4xl">{icon}</div>
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
            <div className="mt-4">
                <a href={dest} className="text-sm font-medium text-yellow-600">Read more →</a>
            </div>
        </div>
    )
}
