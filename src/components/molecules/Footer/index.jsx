export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <h5 className="font-semibold">Singkawang</h5>
                    <p className="text-sm text-gray-600 mt-2">A travel guide to the coastal city famous for its temples and festivals.</p>
                </div>
                <div>
                    <h6 className="font-semibold">Quick Links</h6>
                    <ul className="mt-3 text-sm text-gray-600 space-y-2">
                        <li><a href={'/singkawang-guide/#/attraction'} className="hover:text-yellow-600">Top Spots</a></li>
                        <li><a href={'/singkawang-guide/#/culinary'} className="hover:text-yellow-600">Food</a></li>
                        <li><a href={'/singkawang-guide/#/culture'} className="hover:text-yellow-600">Culture</a></li>
                        <li><a href={'/singkawang-guide/#/lodge'} className="hover:text-yellow-600">Lodge</a></li>
                        <li><a href={'/singkawang-guide/#/roadmap'} className="hover:text-yellow-600">Roadmap</a></li>
                        <li><a href={'/singkawang-guide/#/transportation'} className="hover:text-yellow-600">Transportation</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-semibold">Connect</h6>
                    <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://www.facebook.com/">Facebook</a>
                        <a href="https://www.youtube.com/">YouTube</a>
                    </div>
                    <div className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Singkawang Guide — All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
