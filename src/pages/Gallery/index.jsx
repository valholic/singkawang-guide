import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BandaraSkw, BatuBelimbing, BuburGunting, Bundaran, CapGoMeh, Choipan, DanauBiru, Horison1, Kaifon, Kwetiau, Mahkota1, Naga, Nona, PasarHongkong, PasirPanjang, Pengkang, PulauSimping, Sgm, Swiss1, Temple3 } from "../../assets";
import { Helmet } from "react-helmet-async";

const galleryImages = [
    { src: PasirPanjang, caption: "Beautiful Pasir Panjang Beach" },
    { src: CapGoMeh, caption: "Cap Go Meh Parade" },
    { src: Choipan, caption: "Tasty Choipan Snack" },
    { src: Temple3, caption: "Chinese Temple" },
    { src: Naga, caption: "Singkawang Dragon Statue" },
    { src: Bundaran, caption: "Awang Ishak Roundabout" },
    { src: BuburGunting, caption: "Bubur Gunting Dessert" },
    { src: Horison1, caption: "Horison Hotel Sunrise" },
    { src: Mahkota1, caption: "Mahkota Hotel View" },
    { src: BatuBelimbing, caption: "Batu Belimbing Landmark" },
    { src: PasarHongkong, caption: "Pasar HongKong Night View" },
    { src: Kwetiau, caption: "Kwetiau Siram Dish" },
    { src: Nona, caption: "Es Nona Dessert" },
    { src: Pengkang, caption: "Grilled Pengkang Snack" },
    { src: DanauBiru, caption: "Blue Lake Sunset" },
    { src: Sgm, caption: "Singkawang Grand Mall View" },
    { src: Swiss1, caption: "Swiss-Belhotel Night" },
    { src: Kaifon, caption: "Kaifon Local Food" },
    { src: PulauSimping, caption: "Simping Island View" },
    { src: BandaraSkw, caption: "Singkawang Airport" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Helmet>
                <title>Singkawang Photo Gallery | Landmarks, Food & Attractions</title>
                <meta name="description" content="Explore Singkawang through our photo gallery featuring beaches, local food, cultural events, hotels, and city landmarks. Discover the beauty and attractions of Singkawang in pictures." />
                <meta name="keywords" content="Singkawang gallery, Singkawang photos, Singkawang attractions, Singkawang landmarks, Singkawang food, Singkawang beaches, Singkawang hotels, Singkawang sightseeing" />
            </Helmet>
            <main className="bg-white font-Ubuntu text-gray-800 min-h-screen p-6">
                <h2 className="text-3xl font-bold text-center mb-12">Singkawang Gallery</h2>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative break-inside-avoid rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full object-cover rounded-lg transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center p-2 transition duration-300">
                            {img.caption}
                        </div>
                    </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black/70 bg-opacity-70 flex items-center justify-center z-50 p-4">
                        <div className="relative max-w-4xl w-full overflow-hidden">
                            <FaTimes onClick={() => setSelectedImage(null)} className="fixed top-5 right-5 text-white cursor-pointer text-2xl" />
                            <img
                            src={selectedImage.src}
                            alt={selectedImage.caption}
                            className="w-full object-contain max-h-[80vh]"
                            />
                            <div className="p-4 text-white text-center">{selectedImage.caption}</div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
