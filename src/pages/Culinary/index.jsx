import { useState } from "react";
import { Bakmie, BuburGunting, BuburPedas, Choipan, Kaifon, Keranjang, Kerupuk, Kwetiau, Nammong, Nona, Pengkang, SariKacang } from "../../assets";
import { Detail, SelectCard } from "../../components";
import { Helmet } from "react-helmet-async";


export default function CulinaryPage() {
    const dishes = [
    {
        id: 1,
        name: "Choipan",
        image: Choipan,
        description:
        "Choipan is one of Singkawang’s most beloved Hakka snacks, consisting of thin, translucent dumpling skins filled with shredded jicama, garlic, chives, and dried shrimp. Steamed until soft and chewy, the dumplings are generously topped with crispy fried garlic and served with a signature chili-sweet sauce that enhances the savory filling. It’s a must-try dish that perfectly showcases Singkawang’s Chinese-Indonesian culinary heritage.",
        funfact: "Choipan is traditionally made by hand and often sold only in the morning.",
        places: [
            {
                name: "Choipan Fung Ce",
                maps: "https://maps.app.goo.gl/p3Tp2qPYRoRqGooM6"
            },
            {
                name: "Choi Pan Tho Ce \"Cabang Kawasan Tradisional Marga Tjhia\"",
                maps: "https://maps.app.goo.gl/dLbvAfoSYFx8aAnq8"
            },
            {
                name: "Pondok choipan mandiri",
                maps: "https://maps.app.goo.gl/eGYEMsKe31caoiW76"
            },
        ]
    },
    {
        id: 2,
        name: "Kaifon(Nasi Campur)",
        image: Kaifon,
        description:
        "Kaifon is a comforting bowl of soft rice noodles served in a light, fragrant broth, typically topped with minced pork, fish cake, scallions, and crispy shallots. The dish is mild yet flavorful, making it a favorite breakfast option among locals. Its simplicity, warm aroma, and silky texture offer a perfect start to the day, especially in Singkawang’s cool morning atmosphere.",
        funfact: "Kaifon is unique to West Kalimantan and rarely found outside the region.",
        places: [
            {
                name: "Kaifon LOPAITO 389",
                maps: "https://maps.app.goo.gl/pAwaeHcbTsBAi7H79"
            },
            {
                name: "Nasi Campur Asiat Singkawang",
                maps: "https://maps.app.goo.gl/cJ6PDm5LQFjXkcMs7"
            },
            {
                name: "Nasi Campur ALIONG Singkawang",
                maps: "https://maps.app.goo.gl/KW412xjbdvtmk4mc6"
            },
        ]
    },
    {
        id: 3,
        name: "Bakmie",
        image: Bakmie,
        description:
        "Singkawang-style Bakmie consists of springy handmade noodles topped with minced pork, char siu slices, fish cake, and a drizzle of savory oil. The noodles are known for their soft yet chewy texture and are typically served dry with a small bowl of broth on the side. This dish highlights the city’s strong Hakka culinary influence and is considered one of the most comforting staples among locals.",
        funfact: "Many local bakmie shops still use traditional wooden noodle rollers.",
        places: [
            {
                name: "Bakmi Hijau Sawi",
                maps: "https://maps.app.goo.gl/L6szyTSKiDcdjao99"
            },
            {
                name: "Bakmi Kering Haji Aman(Halal)",
                maps: "https://maps.app.goo.gl/Uc3vamPQLU2hJ2M98"
            },
            {
                name: "Bakmie Ok",
                maps: "https://maps.app.goo.gl/4v669aUK8dsAr52R9"
            },
        ]
    },
    {
        id: 4,
        name: "Bubur Gunting",
        image: BuburGunting,
        description:
        "Bubur Gunting is a warm, sweet Hakka dessert made from soft tapioca dough pieces cut directly into boiling sweet soup, hence the name 'gunting' (scissors). The soup often includes mung beans, coconut milk, and fragrant pandan leaves, creating a comforting balance of sweetness and creaminess. It's a nostalgic treat enjoyed by many families in Singkawang.",
        funfact: "The dough is traditionally cut with scissors into the pot, giving the dish its name.",
        places: [
            {
                name: "Bubur Gunting Asun(Luk Theu San Singkawang)",
                maps: "https://maps.app.goo.gl/iubqqGzX8eEotoJ9A"
            },
            {
                name: "Bubur Gunting Abang Kacamata",
                maps: "https://maps.app.goo.gl/FVMoGtXzMAdLFB3h9"
            },
            {
                name: "Bubur Gunting Ason",
                maps: "https://maps.app.goo.gl/bwLtD4GamPV77eYx5"
            },
        ]
    },
    {
        id: 5,
        name: "Bubur Pedas",
        image: BuburPedas,
        description:
        "Bubur Pedas is a savory porridge made from ground rice mixed with a variety of herbs, vegetables, and spices. Despite its name, the flavor is more aromatic than spicy, featuring ingredients like lemongrass, turmeric leaves, and leafy greens. This hearty dish originates from the Malay community and is often served during gatherings or special occasions in Singkawang.",
        funfact: "It's especially popular during Ramadan as a nutritious and filling dish.",
        places: [
            {
                name: "Bubur Pedas \"KAK LONG\"",
                maps: "https://maps.app.goo.gl/bSy2zheNhaCZdvAT7"
            },
            {
                name: "Bubur Pedas Gg Parit Ketapang",
                maps: "https://maps.app.goo.gl/5zEGPCGUXQ5DEXKq8"
            },
            {
                name: "Wr.Bubur Pedas Mak Nina",
                maps: "https://maps.app.goo.gl/Rc3JVoSixPpapvu36"
            },
        ]
    },
    {
        id: 6,
        name: "Es Nona",
        image: Nona,
        description:
        "Es Nona is a colorful iced dessert featuring shaved ice, bright syrups, jelly cubes, red beans, and sweetened condensed milk. The vibrant layers create a refreshing and visually appealing treat perfect for Singkawang’s tropical weather. Its balanced combination of sweetness and cold textures makes it one of the city’s most iconic desserts.",
        funfact: "It's sometimes served as drink in restaurant.",
        places: [
            {
                name: "Es Nona 88",
                maps: "https://maps.app.goo.gl/VxrfsfvBfycjW31m6"
            },
            {
                name: "Es Nona 63_Dapoer63",
                maps: "https://maps.app.goo.gl/kBDRuqT2nShgSt7A7"
            },
        ]
    },
    {
        id: 7,
        name: "Kue Keranjang",
        image: Keranjang,
        description:
        "Kue Keranjang, also known as nian gao, is a sticky sweet rice cake traditionally enjoyed during Lunar New Year. In Singkawang, the cake is often sliced and pan-fried with egg, creating a crispy exterior and soft, chewy interior. This treat symbolizes prosperity and unity among the Chinese community in the city.",
        funfact: "The cake appears mostly during Lunar New Year, so don't miss the chance to buy it.",
        places: [
            {
                name: "Sin Hap Hin",
                maps: "https://maps.app.goo.gl/VhSEE2zDm51aUd2fA"
            },
        ]
    },
    {
        id: 8,
        name: "Kerupuk Basah",
        image: Kerupuk,
        description:
        "Kerupuk Basah is a chewy fish-cake snack made from tapioca and freshwater fish, steamed instead of fried. It is served with a spicy peanut dipping sauce that enhances its savory and slightly elastic texture. Although originating from Sambas, this dish is widely loved and frequently enjoyed in Singkawang.",
        funfact: "Unlike regular crackers, Kerupuk Basah is never fried—always steamed.",
        places: [
            {
                name: "Kerupuk Basah Bunda Zavian",
                maps: "https://maps.app.goo.gl/QxYTRC6sLKFg3v4i8"
            },
            {
                name: "Kerupuk Basah Santi",
                maps: "https://maps.app.goo.gl/7UhFWneNHFwQTNMB7"
            },
            {
                name: "Kerupuk basah defitri",
                maps: "https://maps.app.goo.gl/2B49KnDxz4ZbpmWW9"
            },
        ]
    },
    {
        id: 9,
        name: "Kwetiau Goreng",
        image: Kwetiau,
        description:
        "Singkawang-style Kwetiau Goreng(Fried Kwetiau) features wide, flat rice noodles stir-fried in a blazing hot wok with shrimp, pork, vegetables, and a rich soy-based seasoning. The dish is smokey, savory, and packed with umami thanks to the Hakka cooking techniques used in the city. Its ‘wok hei’ aroma is what makes it especially distinctive.",
        funfact: "The strong 'wok hei' flavor comes from cooking over extremely high heat.",
        places: [
            {
                name: "Ashuk Fried Kwetiau Noodles",
                maps: "https://maps.app.goo.gl/mbHNGGtDc92jQCAE7"
            },
            {
                name: "Mie Tiaw Kwetiau Kebak Ashuk",
                maps: "https://maps.app.goo.gl/4vg3tEAhHjthy16D6"
            },
            {
                name: "Kwetiaw Goreng Kridasana",
                maps: "https://maps.app.goo.gl/QPHSvYj8DwwJm6sG7"
            },
        ]
    },  
    {
        id: 10,
        name: "Es Nam Mong",
        image: Nammong,
        description:
        "Es Nam Mong is a refreshing dessert drink made of grass jelly, pandan jelly, sweet syrup, and crushed ice. The combination of smooth jelly textures and sweet, cooling flavors makes it a perfect thirst-quencher during Singkawang’s hot afternoons. Many locals enjoy it as a light dessert or mid-day snack.",
        funfact: "It's sometimes served as drink in restaurant.",
        places: [
            {
                name: "Food Court Kulor",
                maps: "https://maps.app.goo.gl/Dcb8kjfWUaz7ACrF6"
            }
        ]
    },
    {
        id: 11,
        name: "Pengkang",
        image: Pengkang,
        description:
        "Pengkang is a grilled glutinous rice snack wrapped in banana leaves and filled with savory dried shrimp. The banana leaf imparts a smoky aroma when grilled, creating a delicious blend of fragrance, chewiness, and umami.",
        funfact: "It is commonly sold along roadside stalls and enjoyed as a snack during road trips in West Kalimantan.",
        places: [
            {
                name: "Pengkang amui",
                maps: "https://maps.app.goo.gl/AQRhnjKdc1E6Yyc27"
            },
        ]
    },
    ];

    const [selectedDish, setSelectedDish] = useState(dishes[0]);

    return (
        <>        
            <Helmet>
                <title>Singkawang Culinary Guide | Local Foods, Hakka Dishes & Street Snacks</title>
                <meta name="description" content="Explore Singkawang’s best culinary delights, from choipan, bakmie, kaifon, bubur gunting, bubur pedas, pengkang, kerupuk basah, to refreshing desserts like es nona and es nam mong. Discover local flavors influenced by Chinese, Malay, and Dayak heritage, complete with recommended places to try each dish." />
                <meta name="keywords" content="Singkawang culinary, Singkawang food, Singkawang local dishes, choipan Singkawang, bakmie Singkawang, kaifon, bubur gunting, bubur pedas, es nona, pengkang, kerupuk basah, kwetiau goreng Singkawang, Singkawang street food, Singkawang Hakka food" />
            </Helmet>
            <main className="max-w-6xl mx-auto px-6 py-12 font-Ubuntu text-gray-800">
                <h1 className="text-3xl font-extrabold mb-6">Culinary Delights of Singkawang</h1>
                <p className="text-sm mb-6">Singkawang’s culinary scene is a rich blend of flavors shaped by Chinese, Malay, and Dayak heritage. From comforting street snacks and traditional home-style dishes to refreshing local drinks, every item reflects the city’s unique multicultural identity. Explore the food and beverages that make Singkawang one of the most flavorful destinations in West Borneo.</p>
                {/* Horizontal Scrollable Cards */}
                <section aria-labelledby="dish-cards" className="mb-12">
                    <h2 id="dish-cards" className="text-2xl font-semibold">Featured Food & Drinks</h2>
                    <div className="mt-4 flex snap-x snap-mandatory space-x-6 overflow-x-auto p-5"> {dishes.map(dish => <SelectCard key={dish.id} item={dish} onClick={() => setSelectedDish(dish)} />)}
                    </div>
                </section>

                {/* Dish Detail */}
                {selectedDish && <Detail item={selectedDish} />}
            </main>
        </>
    );
}
