import HistoryArticle from "../HistoryArticle";

export default function History() {
    const timeline = [
    {
        year: "18th Century",
        title: "Early Settlement",
        text: "Chinese miners and traders passed through Singkawang on their way to gold mines. Many decided to stay, drawn by the sea, mountains, and rivers.",
    },
    {
        year: "19th Century",
        title: "Growing Port Town",
        text: "Singkawang became a regional hub under Dutch colonial rule. It served as an important stop for trade and governance.",
    },
    {
        year: "1950s–1980s",
        title: "Administrative Center",
        text: "Singkawang was part of Sambas Regency and later became an Administrative City in 1981. It grew steadily while preserving its multicultural roots.",
    },
    {
        year: "1999–2001",
        title: "Path to Autonomy",
        text: "Locals pushed for Singkawang to become an independent city. The effort succeeded in 2001 when it officially became an autonomous city.",
    },
    {
        year: "Today",
        title: "Cultural Gem of West Kalimantan",
        text: "Known as the City of a Thousand Temples, Singkawang celebrates diverse cultures with vibrant festivals. It's now one of Indonesia’s most colorful cultural destinations.",
    },
    ];

    return (
        <section aria-labelledby="history-heading" className="mt-16">
            <h2 id="history-heading" className="text-2xl font-semibold">The History of Singkawang</h2>
            <p className="text-gray-600 mt-2">A quick timeline highlighting important periods and developments.</p>
            <div className="mt-6">
                {/* Horizontal scroll container */}
                <div className="relative">
                    <div className="flex items-center gap-6 overflow-x-auto py-6 px-2 snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
                        {timeline.map((t, i) => <HistoryArticle key={i} text={t.text} title={t.title} year={t.year} />)}
                    </div>

                    {/* subtle left/right gradient indicators for scroll affordance */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/90 to-white/0 hidden lg:block" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/90 to-white/0 hidden lg:block" />
                </div>
            </div>
        </section>
    )
}
