export default function SelectCard({ item, onClick }) {
    return (
        <div className="flex-shrink-0 flex items-end w-64 h-60 rounded-lg shadow-md cursor-pointer bg-cover bg-center bg-blend-overlay bg-white/20 snap-start" onClick={onClick} style={{backgroundImage: `url('${item.image}')`}}>
            <div className="p-4">
                <h3 className="font-semibold text-slate-100 text-xl text-shadow-black text-shadow-sm">{item.name}</h3>
            </div>
        </div>
    );
}
