import { useState } from "react";
import { useLocation } from "react-router-dom";
import Hamburger from "../Hamburger";
import { Logo } from "../../../assets";

export default function Header() {
    const location = useLocation().pathname;
    const [open, setOpen] = useState(false);
    const path = ['Home', 'About', 'Culinary', 'Attraction', 'Culture', 'Lodge', 'Transportation', 'Gallery', 'Roadmap', 'Contact'];

    return (
        <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center">
                        <img src={Logo} className="w-full h-full" />
                    </div>
                    <div>
                        <a href="/singkawang-guide/#/home" className="text-lg font-semibold tracking-tight">Singkawang</a>
                        <div className="text-xs text-gray-500">The City of Thousand Temples</div>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-6 text-sm">
                    {path.map((name, i) => {
                        return <a href={`/singkawang-guide/#/${name.toLowerCase()}`} key={i} className={`hover:bg-slate-200 p-2 rounded-2xl ${location === `/${name.toLowerCase()}`? "animate-bounce bg-slate-200" : "animate-none"}`}>{name}</a>
                    })}
                </nav>

                {/* small-screen menu button (non-functional placeholder) */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(open? false : true)} className={`p-2 ${open? "rounded-md border" : ""} bg-white`}>☰</button>
                </div>
            </div>
            <Hamburger open={open} paths={path} handleOpen={setOpen} />
        </header>
    )
}
