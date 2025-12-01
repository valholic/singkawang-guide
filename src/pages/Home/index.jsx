import { Helmet } from "react-helmet-async";
import { AboutH, CulinaryH, CultureH, ExtraH, Hero, TourismH } from "../../components";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Singkawang Travel Guide | Tourism, Culture & Culinary</title>
                <meta name="description" content="Explore Singkawang, a coastal city known for beaches, temples, culinary delights, cultural festivals, and iconic events. Discover attractions, local food, travel highlights, and visitor information all in one place." />
                <meta name="keywords" content="Singkawang, Singkawang tourism, Singkawang travel guide, Singkawang attractions, Singkawang food, Singkawang drink, Singkawang culture, Singkawang festival, Singkawang culinary, Singkawang city"/>
            </Helmet>
            <div className="text-gray-800 bg-white font-Ubuntu">
                <main id="home">
                    <Hero />
                    <AboutH />
                    <TourismH />
                    <CulinaryH />
                    <CultureH />
                    <ExtraH />
                </main>
            </div>
        </>
    );
}