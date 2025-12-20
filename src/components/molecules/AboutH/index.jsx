export default function AboutH() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 items-center">
                <div className="col-span-6">
                    <img src={'https://drive.google.com/thumbnail?id=1qIk00ljnzN_OplHLj4xODE80FsZUXaXi&sz=s1000'} alt="Singkawang city" className="w-full object-fill h-80 md:h-100 lg:h-120" />
                </div>
                <div className="col-span-6">
                    <h2 className="text-3xl font-semibold">About Singkawang</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">Singkawang is a coastal town known for its rich cultural blend of Chinese and local traditions. From colorful temples to bustling markets and delicious street food — the city rewards curious travelers with memorable experiences.</p>
                    <div className="mt-6">
                        <a href={"/singkawang-guide/#/about"} className="inline-block px-5 py-3 rounded-md bg-yellow-100 border hover:bg-yellow-200">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}