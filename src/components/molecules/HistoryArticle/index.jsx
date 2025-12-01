export default function HistoryArticle({ year, title, text }) {
    return (
        <div className="max-w-[90vw] shrink-0 snap-start">
            <div className="rounded-2xl bg-white p-6 shadow-sm h-full">
                <div className="text-sm text-yellow-600 font-semibold">{year}</div>
                <h3 className="mt-3 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    )
}
