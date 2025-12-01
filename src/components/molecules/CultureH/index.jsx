import CultureArticle from "../CultureArticle";

export default function CultureH() {
    const culture = [
        {
            title: "Cap Go Meh Festival",
            desc: "A grand cultural celebration featuring Tatung performances, lanterns, and vibrant street parades.",
            icon: "🧧",
        },
        {
            title: "Bakcang Festival",
            desc: "A traditional Chinese rice dumpling filled with savory meat, wrapped in bamboo leaves and enjoyed during cultural festivals.",
            icon: "🍙",
        },
        {
            title: "Hungry Ghost Festival",
            desc: "An annual Taoist event where communities burn offerings, host stage performances, and honor wandering spirits.",
            icon: "👻",
        },
    ];


    return (
        <section id="culture" className="bg-gray-50 py-16 w-full mx-auto px-6">
            <h3 className="text-2xl font-semibold">Culture & Events</h3>
            <p className="text-gray-600 mt-2">A glimpse into traditions and festivals.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {culture.map((c, i) => <CultureArticle key={i} icon={c.icon} title={c.title} desc={c.desc} dest={`/singkawang-guide/culture`} />)}
            </div>
        </section>
    )
}
