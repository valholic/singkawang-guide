import { Helmet } from "react-helmet-async";
import { Horison1, Horison2, Horison3, Mahkota1, Mahkota2, Mahkota3, Swiss1, Swiss2, Swiss3, Swiss4 } from "../../assets";
import { LodgeCard } from "../../components";

export default function LodgePage() {
    const lodges = [
        {
            id: 1,
            name: "Horison Ultima Singkawang",
            web: "https://myhorison.com/v2/webhome",
            location: "Jl. Pasir Panjang No. 1, Sedau, Pasir Panjang Beach, South Singkawang District, Singkawang City, West Kalimantan 79163, Indonesia",
            maps: "https://maps.app.goo.gl/uhE12z7DjoFyyiH69",
            description:
                "A serene beachfront resort located directly on Pasir Panjang beach, offering superb ocean views. Features include two swimming pools (for adults and children) and spacious rooms, making it an ideal choice for family holidays.", // Faktual: Di pantai, pemandangan laut, 2 kolam renang (anak & dewasa).
            images: [
                Horison1,
                Horison2,
                Horison3,
            ],
        },
        {
            id: 2,
            name: "Mahkota Hotel Singkawang",
            web: "https://hotelmahkotasingkawang.com/",
            location: "Jl. P. Diponegoro No. 01, Pasiran, West Singkawang District, Singkawang City, West Kalimantan 79122, Indonesia",
            map: "https://maps.app.goo.gl/hN8Z465jHvxSKUp2A",
            description:
                "A comprehensive city hotel centrally located for easy access to Singkawang's city center and cultural sites. Amenities include a spa, fitness center, a children's pool, and a dedicated restaurant, ensuring a comfortable stay for both business and leisure travelers.", // Faktual: Pusat kota, punya Spa, Gym, Kolam Anak, dan cocok untuk Bisnis/Wisata.
            images: [
                Mahkota1,
                Mahkota2,
                Mahkota3,
            ],
        },
        {
            id: 3,
            name: "Swiss-Belinn Singkawang",
            web: "https://www.swiss-belhotel.com/hotels/swiss-belinn-singkawang",
            location: "Singkawang Grand Mall Area, Jl. Alianyang, Pasiran, West Singkawang District, Singkawang City, West Kalimantan 79123, Indonesia",
            maps: "https://maps.app.goo.gl/Xi77zpo373rNTwou7",
            description:
                "Enjoy ultimate convenience with direct access to Singkawang Grand Mall. This modern hotel offers an outdoor swimming pool (including a children's pool), an international restaurant (Barelo), and rooms often feature city or mountain views.", // Faktual: Terhubung langsung ke Grand Mall, ada kolam renang (anak & dewasa), restoran Barelo, pemandangan kota/gunung.
            images: [
                Swiss1,
                Swiss2,
                Swiss3,
                Swiss4,
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Best Hotels & Lodges in Singkawang | Horison, Mahkota, Swiss-Belinn</title>
                <meta name="description" content="Find the best hotels in Singkawang, including beachfront Horison Ultima, centrally located Mahkota Hotel, and mall-connected Swiss-Belinn. Compare locations, facilities, amenities, and photos to choose the perfect place to stay during your trip to Singkawang." />
                <meta name="keywords" content="Singkawang hotels, Lodges in Singkawang, Horison Ultima Singkawang, Mahkota Hotel Singkawang, Swiss-Belinn Singkawang, accommodation Singkawang, Singkawang lodging, Singkawang resort, Pasir Panjang hotels" />
            </Helmet>
            <main className="max-w-6xl mx-auto px-6 py-12 font-Ubuntu text-gray-800">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Lodges in Singkawang
                </h1>
                <div className="flex flex-col gap-12">
                    {lodges.map((lodge) => (
                        <LodgeCard key={lodge.id} lodge={lodge} />
                    ))}
                </div>
            </main>
        </>
    );
}