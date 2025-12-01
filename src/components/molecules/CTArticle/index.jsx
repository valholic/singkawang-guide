export default function CTArticle({ img, title, desc, dest }) {
    return (
        <article className="rounded-2xl bg-white shadow-sm overflow-hidden">
            <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
                <div className="p-5">
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
                <div className="mt-4">
                    <a href={`/singkawang-guide/#/${dest}`} className="text-sm font-medium text-yellow-600">Read more →</a>
                </div>
            </div>
        </article>
    )
}
