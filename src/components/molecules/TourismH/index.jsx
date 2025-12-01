import { PasirPanjang, PulauSimping, Temple3 } from "../../../assets";
import CTArticle from "../CTArticle";

export default function TourismH() {
    const tourism = [
        {
            title: "Vihara Tri Dharma Bumi Raya",
            desc: "A historic Chinese temple known for its ornate architecture, incense rituals, and vibrant festival celebrations.",
            img: Temple3,
        },
        {
            title: "Pasir Panjang Beach",
            desc: "A long sandy beach with calm waves, popular for sunset views, swimming, and freshly served seafood stalls.",
            img: PasirPanjang,
        },
        {
            title: "Simping Island",
            desc: "Recognized as one of the world’s smallest islands, offering coastal views, photo spots, and a peaceful seaside walkway.",
            img: PulauSimping,
        },
    ];


    return (
        <section id="tourism" className="bg-gray-50 py-16 mx-auto px-6 w-full">
            <h3 className="text-2xl font-semibold">Tourism Highlights</h3>
            <p className="text-gray-600 mt-2">Handpicked spots to add to your itinerary.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {tourism.map((t, i) => <CTArticle key={i} img={t.img} desc={t.desc} title={t.title} dest={`/singkawang-guide/attraction`} />)}
            </div>
        </section>
    )
}
