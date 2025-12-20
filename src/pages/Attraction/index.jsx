import { useState } from "react";
import { Detail, SelectCard } from "../../components";
import { Helmet } from "react-helmet-async";

export default function Attraction() {
    const places = [
        {
            id: 1,
            name: "Pasir Panjang Beach",
            image: "https://drive.google.com/thumbnail?id=1k7v52FEZ0wGXdoZwflcIga6rQF3cOXJD&sz=s1000",
            description: "A long stretch of golden sand with calm waves and wide-open sea views, Pasir Panjang Beach is one of Singkawang’s most relaxing coastal spots. Visitors come here to enjoy peaceful walks, gentle breezes, and the stunning sunset that paints the entire shoreline in warm colors. Whether you want to swim, take photos, or simply unwind, this beach offers a serene escape just outside the city.",
            funfact: "It’s one of the most popular sunset spots in West Kalimantan!",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.52851058614!2d108.87961539999999!3d0.8472356499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e30b4c3c578cc1%3A0xd7b056ba0ac0295a!2sPantai%20Pasir%20Panjang!5e0!3m2!1sid!2stw!4v1763253799348!5m2!1sid!2stw",
        },
        {
            id: 2,
            name: "Simping Island",
            image: "https://drive.google.com/thumbnail?id=1jm6eQiDxtxfPXYpDD9mcadDOmIdJwnEK&sz=s1000",
            description: "Known as Indonesia’s smallest island, Simping offers a quiet coastal atmosphere where visitors can enjoy clear waters, gentle waves, and a beautiful view of the open sea. A short walkway allows you to reach the tiny island easily, making it a unique stop for sightseeing and photography. Despite its size, Simping carries cultural significance and adds charm to Singkawang’s coastline.",
            funfact: "Simping Island is officially listed by UNESCO as Indonesia’s smallest island!",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.44604046577!2d108.9010262!3d0.867028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e374a7bf832d7f%3A0x7a00b13638d40b9a!2sPulau%20Simping!5e0!3m2!1sid!2stw!4v1763253931651!5m2!1sid!2stw",
        },
        {
            id: 3,
            name: "Pasar Hongkong",
            image: "https://drive.google.com/thumbnail?id=160ZGwVKEORJ8SgJVhR94GnstqbsANs9q&sz=s1000",
            description: "Pasar Hongkong is one of Singkawang’s most lively night markets, buzzing with street food vendors, snack stalls, clothing shops, and colorful lights that create an energetic evening atmosphere. Visitors can sample local dishes, shop for souvenirs, or simply stroll through the busy walkways while enjoying the sounds and scents of the market. It’s a great place to experience the city’s nightlife and multicultural spirit.",
            funfact: "Despite its name, the market isn’t from Hong Kong — it’s inspired by the lively night markets of Chinese communities.",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3155946713246!2d108.98934109999999!3d0.9095595999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e3734b1b6da829%3A0xc2803c5abd9347fe!2sPasar%20Hongkong%20Singkawang!5e0!3m2!1sid!2stw!4v1763253968658!5m2!1sid!2stw",
        },
        {
            id: 4,
            name: "Bajau Beach",
            image: "https://drive.google.com/thumbnail?id=1VAtwErvb9RWZ-BxuDQW3PBfHjDeU1v7q&sz=s1000",
            description: "Bajau Beach combines natural beauty with family-friendly attractions, offering sandy shores, rocky viewpoints, and a park-like recreational area all in one destination. The coastline has several scenic spots perfect for photos, especially near the iconic rock formations locals call “Taman Batu.” Whether you're looking to relax, explore, or enjoy nearby amusement areas, Bajau Beach provides a versatile coastal experience.",
            funfact: "Locals call it ‘Taman Batu’ because of its unique rock formations facing the sea.",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3699768684787!2d108.89169460000001!3d0.8589553000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e374ad771ba9ad%3A0x1c12da0437fd35b6!2sBajau%20Beach!5e0!3m2!1sid!2stw!4v1763254005016!5m2!1sid!2stw",
        },
        {
            id: 5,
            name: "Batu Burung Beach",
            image: "https://drive.google.com/thumbnail?id=14Dbsxhl81woLSyKj04UBqaVMMwTrFFLs&sz=s1000",
            description: "Batu Burung Beach is a peaceful seaside area known for its gentle waves and the unique bird-shaped rock that has become its signature landmark. Travelers visit to enjoy quiet coastal scenery, take pictures around the rock formations, and watch the horizon where the sea meets the sky. Its calm surroundings make it a great spot for slow walks and relaxing moments away from the busier city areas.",
            funfact: "The name ‘Batu Burung’ comes from a rock formation believed to resemble a giant bird.",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.453947423519!2d108.9055128!3d0.86515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e37357751c4ab5%3A0x566cbae13cb1ce5b!2sPantai%20Batu%20Burung!5e0!3m2!1sid!2stw!4v1763254036372!5m2!1sid!2stw",
        },
        {
            id: 6,
            name: "Vihara Sui Kheu Thai Pak Kung",
            image: "https://drive.google.com/thumbnail?id=1KDBdi2Ja6Ionb61RrBfbXZaJ8UodCIeQ&sz=s1000",
            description: "This historic Chinese temple stands out with its bright colors, detailed carvings, and traditional architectural style that reflects Singkawang’s strong Hakka heritage. Visitors often come to admire its cultural atmosphere, observe worship rituals, and explore the intricate designs inside the temple. During major festivals, especially Cap Go Meh, it becomes one of the city’s most important and crowded spiritual landmarks.",
            funfact: "During Cap Go Meh, this temple becomes one of the main gathering points for Tatung rituals.",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31914.63006093599!2d108.98499!3d0.8975728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e36d747f5ad4cb%3A0xdcb00bb7968c8b8c!2sVihara%20Sui%20Kheu%20Thai%20Pak%20Kung!5e0!3m2!1sid!2stw!4v1763254070242!5m2!1sid!2stw",
        },
        {
            id: 7,
            name: "Danau Biru",
            image: "https://drive.google.com/thumbnail?id=15Ocb6qrHAqFkbamySBRPgY-exJ4tS1pW&sz=s1000",
            description: "Danau Biru is a striking blue lake formed from an old mining site, now transformed into one of Singkawang’s most unique natural attractions. Its vivid turquoise color comes from mineral-rich soil, creating a surreal and eye-catching view that draws photographers and nature lovers. Surrounded by quiet landscapes, the lake offers a peaceful stop for visitors looking to enjoy unusual scenic beauty.",
            funfact: "The lake’s bright blue color is completely natural — created by mineral-rich soil around the area.",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3072978308624!2d109.03628979999999!3d0.9170345999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e36d4328cb7b6d%3A0x89f4c24cdb32f410!2sDanau%20Biru%20Singkawang!5e0!3m2!1sid!2stw!4v1763254106010!5m2!1sid!2stw",
        },
        {
            id: 8,
            name: "Batu Belimbing",
            image: "https://drive.google.com/thumbnail?id=1yBubGw-TjypfKVwoB5BRNGqpQuiBt_cL&sz=s1000",
            description: "Batu Belimbing features an impressive formation of large rocks shaped like a starfruit, set within a serene forested environment. Travelers visit to explore the natural surroundings, take photos of the iconic stone structures, and enjoy the peaceful walking paths around the area. Its distinctive shape and tranquil atmosphere make it a refreshing escape into Singkawang’s natural landscapes.",
            funfact: "Its starfruit-like shape is what inspired the name ‘Batu Belimbing’.",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.3524721580175!2d109.0511523!3d0.8755632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e36ce70cd43801%3A0xffac12d727e131ca!2sWisata%20Batu%20Belimbing!5e0!3m2!1sid!2stw!4v1763254139381!5m2!1sid!2stw",
        },
        {
            id: 9,
            name: "Singkawang Grand Mall",
            image: "https://drive.google.com/thumbnail?id=18_LNOJAAeZmB6cTZ30u2mX6fobIOGk-D&sz=s1000",
            description: "As the largest shopping center in Singkawang, this modern mall offers a comfortable space for dining, shopping, leisure, and entertainment under one roof. Visitors can explore a variety of stores, enjoy local and international food, or simply relax in the cool air-conditioned environment—especially on hot afternoons. It’s a popular gathering spot for both locals and travelers looking for modern conveniences.",
            funfact: "It’s the city’s go-to spot for air-conditioned comfort during hot afternoons!",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.327846017087!2d108.9696898!3d0.8984080999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e372128130a22b%3A0x121838ff9066df40!2sSingkawang%20Grand%20Mall!5e0!3m2!1sid!2stw!4v1763254185040!5m2!1sid!2stw",
        },
    ];

    const [selectedPlace, setSelectedPlace] = useState(places[0]);
    
    return (
        <>
            <Helmet>
                <title>Singkawang Attractions | Top Tourist Spots, Beaches, Temples & Landmarks</title>
                <meta name="description" content="Discover the best attractions in Singkawang, including Pasir Panjang Beach, Simping Island, Danau Biru, Batu Belimbing, temples, night markets, and more. Explore the city’s top destinations, natural landscapes, and cultural highlights." />
                <meta name="keywords" content="Singkawang attractions, Singkawang tourist spots, Pasir Panjang Beach, Simping Island, Danau Biru Singkawang, Batu Belimbing, Singkawang beaches, Singkawang temples, Singkawang tourism, places to visit in Singkawang" />
            </Helmet>
            <main className="max-w-6xl mx-auto px-6 py-12 font-Ubuntu text-gray-800">
                <h1 className="text-3xl font-extrabold mb-2">Explore Singkawang's Top Attractions</h1>
                <p className="text-sm mb-6">Discover Singkawang’s stunning natural landscapes, cultural landmarks, and iconic destinations. Whether you’re exploring hidden beaches, historic temples, or unique city spots, these attractions highlight the very best of the city.</p>
                {/* Horizontal Scrollable Cards */}
                <section aria-labelledby="dish-cards" className="mb-12">
                    <h2 id="dish-cards" className="text-2xl font-semibold">Our Popular Tourist Spots</h2>
                    <div className="mt-4 flex space-x-6 overflow-x-auto p-5 snap-x snap-mandatory">
                        {places.map(place => <SelectCard key={place.id} item={place} onClick={() => setSelectedPlace(place)} />)}
                    </div>
                </section>
        
                {/* Dish Detail */}
                {selectedPlace && <Detail item={selectedPlace} />}
            </main>
        </>
    );
}
