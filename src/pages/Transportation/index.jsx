import { FaPlane, FaBus, FaCar, FaTaxi, FaShuttleVan, FaMotorcycle } from "react-icons/fa";
import { StepCardD, StepCardM, TransportCard } from "../../components";
import { Helmet } from "react-helmet-async";

export default function Transportation() {
    const travelSteps = [
        {
        icon: <FaPlane className="text-yellow-500 text-3xl" />,
        title: "By Plane(Direct flight)",
        img: "https://drive.google.com/thumbnail?id=103nhaf-VeDNppvs2LGLui5bI9ZXrD85F&sz=s1000",
        desc: "You can fly directly to Singkawang Airport (SWQ), which currently serves limited domestic routes. It is the closest airport to the city, offering the fastest way to reach Singkawang when flights are available.",
        },
        {
        icon: <FaPlane className="text-yellow-500 text-3xl" />,
        title: "By Plane(Transit by car/bus)",
        img: "https://drive.google.com/thumbnail?id=1PZWXDEquf55LM7SFITF4e4F61XoqvQBa&sz=s1000",
        desc: "Fly to Supadio Airport in Pontianak (PNK), then continue your journey to Singkawang by car or bus. The trip takes about 3–4 hours and is the most common route for most travelers.",
        },
        {
        icon: <FaBus className="text-yellow-500 text-3xl" />,
        title: "By Bus",
        img: "https://drive.google.com/thumbnail?id=1-PI_euQ1Tk-BLPd68siKtA_kcpfYjeVF&sz=s1000",
        desc: "Daily intercity buses and travel shuttles operate from Pontianak to Singkawang, taking around 3–4 hours. It’s an affordable option with comfortable rides along the Trans-Kalimantan route.",
        },
        {
        icon: <FaCar className="text-yellow-500 text-3xl" />,
        title: "By Car",
        img: "https://drive.google.com/thumbnail?id=1pI1oL9sh3Zac9dUc5FUTsjLWfdnvgtmx&sz=s1000",
        desc: "You can drive from Pontianak to Singkawang in about 3 hours via the Trans-Kalimantan Highway. This option offers flexibility and scenic views along coastal and small-town areas.",
        },
    ];

    const localTransport = [
        {
        icon: <FaTaxi className="text-yellow-500 text-3xl" />,
        title: "Grab",
        img: "https://drive.google.com/thumbnail?id=1sV1pClAxmSj9aHpQcDM-N9zenbCJJf0H&sz=s1000",
        desc: "Grab is widely available in Singkawang, offering convenient rides for short trips, sightseeing, and daily transportation around the city.",
        },
        {
        icon: <FaMotorcycle className="text-yellow-500 text-3xl" />,
        title: "Gojek",
        img: "https://drive.google.com/thumbnail?id=1CKmvQfG1FoQGcUoPc-PKtcP1ithnBFxq&sz=s1000",
        desc: "Gojek is available in certain areas, though with fewer drivers compared to larger cities. It’s useful for quick motorbike rides when available.",
        },
        {
        icon: <FaShuttleVan className="text-yellow-500 text-3xl" />,
        title: "Angkot",
        img: "https://drive.google.com/thumbnail?id=1Efx4qfPuTDuQ9kKa2qakSrXFM2tl04zz&sz=s1000",
        desc: "Public minibuses (angkot) operate on fixed routes across the city and are one of the most affordable ways to travel short distances around Singkawang.",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Transportation in Singkawang | How to Get to Singkawang & Local Transportation Guide</title>
                <meta name="description" content="Discover how to travel to Singkawang by plane, bus, or car, and learn about local transportation options like Grab, Gojek, and Angkot to get around the city conveniently." />
                <meta name="keywords" content="Singkawang travel, Singkawang transportation, how to get to Singkawang, Singkawang airport, Singkawang bus, Grab Singkawang, Gojek Singkawang, Angkot Singkawang" />
            </Helmet>
            <main className="bg-white text-gray-800 font-Ubuntu">
                {/* Section 1 */}
                <section className="py-20 bg-yellow-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            How to Go to Singkawang
                        </h2>
                        {/* Desktop */}
                        <div className="hidden md:flex flex-col space-y-10 relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-300">
                            {travelSteps.map((step, index) => <StepCardD step={step} index={index} key={index} />)}
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-300 pb-4">
                            {travelSteps.map((step, index) => <StepCardM step={step} key={index} />)}
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Getting Around in Singkawang</h2>
                        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-300 pb-6">
                            {localTransport.map((item, index) => <TransportCard item={item} key={index} />)}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
