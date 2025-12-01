import { Link } from "react-router-dom";

export default function ExtraH() {
    return (
        <section className="py-16 w-full mx-auto px-6">
            <h3 className="text-2xl font-semibold">Highlights</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="text-3xl">🖼️</div>
                    <div>
                        <h4 className="font-semibold">Gallery</h4>
                        <p className="mt-1 text-sm text-gray-600">Photo highlights and cityscapes.</p>
                        <div className="mt-3"><Link to={'/gallery'} className="text-yellow-600">See gallery →</Link></div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="text-3xl">📅</div>
                    <div>
                        <h4 className="font-semibold">Events</h4>
                        <p className="mt-1 text-sm text-gray-600">Festival calendar and cultural shows.</p>
                        <div className="mt-3"><Link to={'/culture'} className="text-yellow-600">See events →</Link></div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                        <h4 className="font-semibold">Testimonials</h4>
                        <p className="mt-1 text-sm text-gray-600">What visitors loved about Singkawang.</p>
                        <div className="mt-3"><Link to={'/testimonial'} className="text-yellow-600">Read stories →</Link></div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                        <h4 className="font-semibold">Lodge</h4>
                        <p className="mt-1 text-sm text-gray-600">Where visitors stay at Singkawang.</p>
                        <div className="mt-3"><Link to={'/lodge'} className="text-yellow-600">See lodges →</Link></div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                        <h4 className="font-semibold">Transportation</h4>
                        <p className="mt-1 text-sm text-gray-600">How visitors come to Singkawang.</p>
                        <div className="mt-3"><Link to={'/transportation'} className="text-yellow-600">See transportations →</Link></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
