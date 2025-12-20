import { useState } from "react";
import { CultureCard } from "../../components";
import { Helmet } from "react-helmet-async";

export default function Culture() {
    const cultures = [
    {
        id: 1,
        name: "Cap Go Meh",
        image: "https://drive.google.com/thumbnail?id=1444cWQfmuucd_iorMR4TMzTC-P5Kzutd&sz=s1000",
        description:
        "Cap Go Meh is Singkawang’s grand celebration on the 15th day of the Lunar New Year, featuring spectacular Tatung parades, mesmerizing lantern displays, and traditional rituals that reflect the city’s rich Chinese (especially Hakka) heritage. This festival draws thousands of visitors annually and is a symbol of cultural unity, tolerance, and spiritual devotion in the community. “Tatung” performers often enter trance states, displaying extreme acts like self-piercing, which are believed to bring blessings and ward off evil.",
        date: "15th day of the Lunar New Year (typically February)",
    },
    {
        id: 2,
        name: "Bakcang Festival",
        image: "https://drive.google.com/thumbnail?id=1wJkSwfa24TjHe3ifMg3FccSHHRSlq6NL&sz=s1000",
        description:
        "The Bakcang Festival in Singkawang is a traditional cultural event tied to the Chinese community’s culinary heritage, where people make and share leaf-wrapped rice dumplings (zongzi) filled with meat or sweet fillings. This festival reflects deep-rooted family and communal values, often accompanied by folk performances and market stalls where bakcang is sold and celebrated as a symbol of togetherness and tradition.",
        date: "Around Dragon Boat Festival / 5th day of the 5th lunar month",
    },
    {
        id: 3,
        name: "Hungry Ghost Festival",
        image: "https://drive.google.com/thumbnail?id=1nlnf-ZXZs2UHJ031W5ul0mqyu_V1IJaJ&sz=s1000",
        description:
        "The Hungry Ghost Festival in Singkawang is an important Taoist and Chinese folk event when people honor wandering spirits by preparing altars, burning offerings, and organizing public performances. The community gathers for rituals to appease the ghosts and invite blessings, creating a deeply spiritual yet communal atmosphere that showcases Singkawang’s cultural diversity and respect for ancestral traditions.",
        date: "15th day of the 7th lunar month (Ghost Month)",
    },
    {
        id: 4,
        name: "Mooncake Festival",
        image: "https://drive.google.com/thumbnail?id=1O-OZSR7mYr14ApfZ1KHYbCu78eSLoh6_&sz=s1000",
        description:
            "The Singkawang Mooncake Festival is a vibrant Mid-Autumn celebration held on the 15th day of the 8th lunar month, featuring lantern parades, traditional performances, and community rituals under the full moon. It’s not just a feast of delicious mooncakes — the festival also supports local entrepreneurs, unites families, and preserves ancestral Chinese traditions in a joyful, colorful way. In 2025, the event included a 50-meter aerial ‘Moon Goddess’ dance, lantern procession, and a fair of local crafts and foods.",
        date: "15th day of the 8th lunar month",
    },
    {
        id: 5,
        name: "Naik Dango",
        image: "https://drive.google.com/thumbnail?id=1nhVFLRuFhVtja8uscVdO9dJMugxEDJqH&sz=s1000",
        description:
            "Naik Dango is one of the most important Dayak traditional ceremonies, celebrated to express gratitude for the year’s harvest and to pray for prosperity in the coming planting season. The festival features ritual offerings, traditional dances, gong performances, and community gatherings where Dayak groups from different regions come together to honor their ancestral heritage. It is a lively cultural moment that showcases the deep spiritual connection between the Dayak people and the land they cultivate.",
        date: "Held annually around May, dates vary by Dayak sub-ethnic groups",
    }
    ];

    const [flipped, setFlipped] = useState(null);

    return (
        <>
            <Helmet>
                <title>Singkawang Cultural Festivals | Cap Go Meh, Naik Dango, Mooncake & Local Traditions</title>
                <meta name="description" content="Discover Singkawang’s rich cultural heritage through major festivals like Cap Go Meh with Tatung rituals, Bakcang Festival, Hungry Ghost Festival, Mooncake Festival, and the Dayak Naik Dango celebration. Learn the unique traditions, history, and dates behind the city’s most iconic cultural events." />
                <meta name="keywords" content="Singkawang culture, Singkawang festivals, Cap Go Meh Singkawang, Tatung festival, Bakcang Festival, Hungry Ghost Festival Singkawang, Mooncake Festival Singkawang, Naik Dango Dayak, Singkawang cultural events, Hakka culture Singkawang, Dayak culture West Kalimantan"/>
            </Helmet>
            <main className="max-w-6xl mx-auto px-6 py-12 font-Ubuntu text-gray-800">
                <h1 className="text-3xl font-extrabold mb-2">Culture & Events of Singkawang</h1>
                <p className="text-sm mb-8">Tap the card to see more details.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cultures.map(culture => <CultureCard key={culture.id} culture={culture} handleFlipped={setFlipped} flipped={flipped} />)}
                </div>
            </main>
        </>
    );
}
