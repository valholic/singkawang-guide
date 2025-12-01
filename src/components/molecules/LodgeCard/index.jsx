import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ({ lodge }) {
    const [index, setIndex] = useState(0);
    const total = lodge.images.length;

    function prevImage() {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    function nextImage() {
        setIndex((prev) => (prev + 1) % total);
    };

    return (
        <div
        className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.01] snap-start"
        >
            {/* Image Section */}
            <div className="relative lg:w-1/2 w-full">
                <img
                key={index}
                src={lodge.images[index]}
                alt={`${lodge.name} photo ${index + 1}`}
                className="h-64 lg:h-100 w-full object-cover transition-all duration-500 ease-in-out"
                />

                {/* Left arrow */}
                <FaChevronLeft onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl bg-white/80 hover:bg-yellow-100  p-2 rounded-full shadow-md" />
                {/* Right arrow */}
                <FaChevronRight onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl bg-white/80 hover:bg-yellow-100 p-2 rounded-full shadow-md" />

                {/* Indicator dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {lodge.images.map((_, i) => (
                        <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            i === index ? "bg-yellow-500" : "bg-gray-300"
                        }`}
                        ></div>
                    ))}
                </div>
            </div>

        {/* Details Section */}
            <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-yellow-700">{lodge.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{lodge.location}</p>
                    <p className="text-gray-700 mt-4 leading-relaxed text-justify">{lodge.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                <a href={lodge.web} target="_blank" className="px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-md hover:bg-yellow-200 transition">More information →</a>
                </div>
            </div>
        </div>
    );
}
