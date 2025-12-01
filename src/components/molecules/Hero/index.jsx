import { TanjungBajau } from "../../../assets";

export default function Hero() {
    return (
        <section className="relative">
            <div className="h-[540px] bg-cover bg-center bg-blend-overlay bg-black/30" style={{ backgroundImage: `url('${TanjungBajau}')` }}>
                <div className="w-full mx-auto px-6 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">Welcome to Singkawang</h1>
                        <p className="mt-4 text-lg opacity-90">Discover a coastal city where culture, temples and delicious food come together.</p>
                        <div className="mt-6 flex gap-4">
                            <a href={"/singkawang-guide/attraction"} className="inline-block px-6 py-3 rounded-md bg-yellow-200 text-sm font-medium hover:bg-yellow-300 text-black">Explore More</a>
                            <a href={"/singkawang-guide/contact"} className="inline-block px-6 py-3 rounded-md bg-white/90 text-sm font-medium hover:bg-white text-black">Contact Us</a>
                        </div>
                        <div className="mt-6 text-sm text-gray-200">Tip: Best visiting months are February - April for festival season.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
