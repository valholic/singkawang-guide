export default function Hamburger({ open, paths, handleOpen }) {
    return (
        <div className={`lg:hidden w-full bg-white shadow-md overflow-hidden transition-all duration-1000 ${open ? "max-h-[70vh]" : "max-h-0"} `} >
            <nav className="flex flex-col px-6 py-4 space-y-4 text-lg font-medium">
                {paths.map((path, i) => {
                    return <a key={i} href={`/${path.toLowerCase()}`} onClick={() => handleOpen(false)} className="hover:text-blue-600">{path}</a>
                })}
            </nav>
        </div>
    )
}
