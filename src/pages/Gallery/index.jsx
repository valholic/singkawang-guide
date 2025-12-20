import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const galleryImages = [
    { src: "https://drive.google.com/thumbnail?id=1k7v52FEZ0wGXdoZwflcIga6rQF3cOXJD&sz=s1000", caption: "Beautiful Pasir Panjang Beach" },
    { src: "https://drive.google.com/thumbnail?id=1444cWQfmuucd_iorMR4TMzTC-P5Kzutd&sz=s1000", caption: "Cap Go Meh Parade" },
    { src: "https://drive.google.com/thumbnail?id=1jyHh_N71mqLTEFX68SzxuXxasEKNLQ44&sz=s1000", caption: "Tasty Choipan Snack" },
    { src: "https://drive.google.com/thumbnail?id=1KDBdi2Ja6Ionb61RrBfbXZaJ8UodCIeQ&sz=s1000", caption: "Chinese Temple" },
    { src: "https://drive.google.com/thumbnail?id=1vp_I0OIUm34lCl7PkxdW8OtMAvDyUQeZ&sz=s1000", caption: "Singkawang Dragon Statue" },
    { src: "https://drive.google.com/thumbnail?id=1WQFiP8xDIM22QbxRxHBiX41xQ60dcbKH&sz=s1000", caption: "Awang Ishak Roundabout" },
    { src: "https://drive.google.com/thumbnail?id=1Uy_BQMSriaZJvPGU4y9nK8fua1g6L-Dj&sz=s1000", caption: "Bubur Gunting Dessert" },
    { src: "https://drive.google.com/thumbnail?id=13GcdL0T_LoMKPSv3nETjRB8FU-wGPrM3&sz=s1000", caption: "Horison Hotel Sunrise" },
    { src: "https://drive.google.com/thumbnail?id=1jRFm-Wgc9XFQIboe8ifBtjibn1YxlBKL&sz=s1000", caption: "Mahkota Hotel View" },
    { src: "https://drive.google.com/thumbnail?id=1yBubGw-TjypfKVwoB5BRNGqpQuiBt_cL&sz=s1000", caption: "Batu Belimbing Landmark" },
    { src: "https://drive.google.com/thumbnail?id=160ZGwVKEORJ8SgJVhR94GnstqbsANs9q&sz=s1000", caption: "Pasar HongKong Night View" },
    { src: "https://drive.google.com/thumbnail?id=1UQuJ5xxiAJrWLl_Ja902c6UZfI_uBpjM&sz=s1000", caption: "Kwetiau Siram Dish" },
    { src: "https://drive.google.com/thumbnail?id=1WGiWuUw-usEqpyC1sySS6xZGYMCOWk7r&sz=s1000", caption: "Es Nona Dessert" },
    { src: "https://drive.google.com/thumbnail?id=1ZpIs_ooDak9ie4w8QexQGFfHmOZdZ4Eu&sz=s1000", caption: "Grilled Pengkang Snack" },
    { src: "https://drive.google.com/thumbnail?id=15Ocb6qrHAqFkbamySBRPgY-exJ4tS1pW&sz=s1000", caption: "Blue Lake Sunset" },
    { src: "https://drive.google.com/thumbnail?id=18_LNOJAAeZmB6cTZ30u2mX6fobIOGk-D&sz=s1000", caption: "Singkawang Grand Mall View" },
    { src: "https://drive.google.com/thumbnail?id=1vCSCJonDJQC548t8T_7Bn17nTxZLMG8e&sz=s1000", caption: "Swiss-Belhotel Night" },
    { src: "https://drive.google.com/thumbnail?id=11z8oBHwapuFG7COkUEx5N19F8zwWs59n&sz=s1000", caption: "Kaifon Local Food" },
    { src: "https://drive.google.com/thumbnail?id=1jm6eQiDxtxfPXYpDD9mcadDOmIdJwnEK&sz=s1000", caption: "Simping Island View" },
    { src: "https://drive.google.com/thumbnail?id=103nhaf-VeDNppvs2LGLui5bI9ZXrD85F&sz=s1000", caption: "Singkawang Airport" },
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
