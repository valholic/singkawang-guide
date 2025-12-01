import { Helmet } from "react-helmet-async";
import {  RoadmapCardD, RoadmapCardM } from "../../components";

export default function Roadmap() {
    const days = [
    {
        day: "Day 1",
        places: [
            "Vihara Tri Dharma Bumi Raya",
            "Nasi Campur Asiat",
            "Es Nona 88",
            "Bajau Beach",
            "Mie Ashuk Kwetiau Goreng"
        ],
        desc: [
            "A grand Chinese temple in the heart of Singkawang, symbolizing harmony and vibrant local culture.",
            "A legendary restaurant famous for its roasted pork rice, a must-try for food lovers.",
            "A traditional Singkawang dessert drink made of red beans, grass jelly, and sweet condensed milk.",
            "A peaceful beach with white sand and blue waters — perfect for watching the sunset.",
            "A local favorite for wok-fried flat noodles with smoky aroma and rich seasoning."
        ],
        tip: "Start early to explore the temple before it gets crowded, and bring a hat or umbrella — the sun can be intense by noon."
    },
    {
        day: "Day 2",
        places: [
            "Pasar Hongkong",
            "Bubur Pedas Kak Long",
            "Danau Biru",
            "Bakmie Hijau Sawi",
            "Pasir Panjang Beach"
        ],
        desc: [
            "A bustling night market known for diverse street food, a vibrant atmosphere, and popular local snacks.",
            "A spicy porridge with rich local herbs and spices, representing authentic Malay taste.",
            "A stunning lake with naturally blue water, popular among photographers and travelers.",
            "Homemade green noodles made from mustard leaves, served with tender chicken and crispy wontons.",
            "The most popular beach in Singkawang — calm waves, scenic views, and perfect for swimming."
        ],
        tip: "Bring a camera or phone with full battery — Danau Biru and Pasir Panjang offer amazing photo spots throughout the day."
    },
    {
        day: "Day 3",
        places: [
            "Rumah Adat Melayu",
            "Bubur Gunting Asun",
            "Singkawang Grand Mosque",
            "Choipan Tho Ce"
        ],
        desc: [
            "A traditional Malay wooden house showcasing local craftsmanship and cultural heritage.",
            "A classic dessert made from sticky rice dough in sweet ginger syrup — warm and comforting.",
            "The largest mosque in Singkawang, known for its elegant architecture and serene atmosphere.",
            "A famous Singkawang snack — steamed rice cakes filled with chives or jicama, served with chili sauce."
        ],
        tip: "Try visiting the traditional Malay house in the morning, then enjoy local snacks like Choipan while the stalls are still fresh."
    },
    {
        day: "Day 4",
        places: [
            "Singkawang Grand Mall",
            "Kampung Rawit",
            "Batu Belimbing",
            "Batu Burung Beach",
            "Simping Island"
        ],
        desc: [
            "A modern shopping center for souvenirs, fashion, and local culinary delights.",
            "A unique village known for its spicy pepper farms and beautiful countryside view.",
            "A large rock formation shaped like a starfruit, one of Singkawang’s hidden gems.",
            "A tranquil coastal area featuring unique rock formations and a natural stone cliff overlooking the sea.",
            "A tiny island considered the smallest island in the world, just a few meters from the coast."
        ],
        tip: "End your trip with a relaxing afternoon at Simping Island — perfect for a peaceful sunset before heading home."
    }
    ];

    return (
        <>        
            <Helmet>
                <title>4-Day Singkawang Itinerary | Complete Travel Roadmap & Best Places to Visit</title>
                <meta name="description" content="Follow this complete 4-day Singkawang itinerary featuring temples, beaches, cultural spots, local food, and hidden gems. Discover the best places to visit including Pasir Panjang, Danau Biru, Bajau Beach, Simping Island, traditional markets, and iconic culinary stops." />
                <meta name="keywords" content="Singkawang itinerary, Singkawang travel guide, things to do in Singkawang, 4-day itinerary Singkawang, Singkawang tourism, Pasir Panjang Singkawang, Danau Biru, Simping Island, Bajau Beach, Singkawang food tour" />
            </Helmet>
            <main className="py-20 bg-yellow-50 font-Ubuntu">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-12 flex flex-col">
                        <h2 className="text-3xl font-bold text-center mb-2">Roadmap to Explore Singkawang</h2>
                        <p className="text-gray-600 leading-relaxed text-sm text-center">Don't know where to start?</p>
                        <p className="text-gray-600 leading-relaxed text-sm text-center">Follow this roadmap as your guide!</p>
                    </div>
                        {/* Desktop */}
                        <div className="hidden md:flex flex-col space-y-10 relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-300">
                            {days.map((day, index) => <RoadmapCardD day={day} index={index} key={index} />)}
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-300 pb-4">
                            {days.map((day, index) => <RoadmapCardM day={day} key={index} />)}
                        </div>
                    </div>
            </main>
        </>
    );
}
