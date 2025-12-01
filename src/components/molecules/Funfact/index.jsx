import FunfactArticle from "../FunfactArticle";

export default function Funfact() {
    const facts = [
        {
            title: "City of Thousand Temples",
            desc: "Singkawang is famous for its many Chinese temples and vibrant religious festivals.",
            icon: "⛩",
        },
        {
            title: "Multicultural Heritage",
            desc: "A unique blend of Chinese, Malay, and indigenous Dayak influences in food and culture.",
            icon: "🧭",
        },
        {
            title: "Seafood Paradise",
            desc: "Fresh seafood is a staple — from beachside grills to local markets.",
            icon: "🐟",
        },
        {
            title: "Cap Go Meh Celebrations",
            desc: "One of the most colorful festival seasons, featuring parades and lion dances.",
            icon: "🦁",
        },
        {
            title: "Gateway to Borneo",
            desc: "Strategically located on the western coast of Borneo with easy access to natural attractions.",
            icon: "🌴",
        },
        {
            title: "Largest Hakka Community in Indonesia",
            desc: "Singkawang is home to one of the biggest Hakka Chinese communities in the Indonesia, shaping its language, festivals, and cuisine.",
            icon: "🏮",
        }
    ];

    return (
        <section aria-labelledby="facts-heading" className="mt-8">
            <h2 id="facts-heading" className="text-2xl font-semibold">Fun Facts</h2>
            <p className="text-gray-600 mt-2">Short and friendly facts to help visitors get excited about Singkawang.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facts.map((f, i) => <FunfactArticle key={i} icon={f.icon} title={f.title} desc={f.desc} />)}
            </div>
        </section>
    )
}
