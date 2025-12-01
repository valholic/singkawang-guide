export default function FunfactArticle({ icon, title, desc }) {
    return (
        <article className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-2xl">{icon}</div>
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
            </div>
        </article>
    )
}
