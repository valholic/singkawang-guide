export default function Detail({ item }) {
    return (
        <section aria-labelledby="item-detail" className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <img src={item.image} alt={item.name} className="w-40 h-40 rounded-lg" />
            <h2 id="item-detail" className="text-2xl font-semibold mt-2">{item.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            <p className="mt-4 text-sm text-yellow-600 italic">Fun Fact: {item.funfact}</p>
            {item.places && 
                <>
                    <h3 className="mt-6 font-semibold text-lg">Places to find it:</h3>
                    <div className="flex flex-col gap-2">
                        {
                            item.places.map((place, i) => {
                                return <a key={i} href={place.maps} className="text-sm underline text-blue-400 cursor-pointer" target="_blank">{place.name}</a>
                            })
                        }
                    </div>
                </>
            }
            {item.location &&
                <>
                    <h3 className="mt-6 font-semibold text-lg">Location: </h3>
                    <iframe
                    src={item.location}
                    className="md:w-4/5 h-100 rounded-lg"
                    style={{border: '0'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </>
            }
        </section>
    );
}