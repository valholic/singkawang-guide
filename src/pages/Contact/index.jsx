import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Singkawang Travel Guide</title>
                <meta name="description" content="Get in touch with us for questions, suggestions, or travel inquiries about Singkawang. Reach us via email, phone, or visit us in Singkawang City, West Kalimantan." />
                <meta name="keywords" content="Singkawang contact, Singkawang travel inquiries, contact Singkawang guide, email Singkawang travel, Singkawang phone number, Singkawang City contact" />
            </Helmet>
            <main className="min-h-screen font-Ubuntu bg-gradient-to-b from-amber-50 to-orange-100 text-gray-800 p-6 md:p-12">
                <h1 className="text-4xl font-bold mb-8 text-center text-black">Contact Us</h1>
                <section className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="w-full flex flex-col gap-y-5">
                        <p className="text-black text-3xl font-extrabold text-center">Have a Good Trip!</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4220248997!2d108.9784!3d0.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e37b4f23456789%3A0xabcdef123456789!2sSingkawang%20City!5e0!3m2!1sen!2sid!4v000000000"
                            width="100%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Singkawang Map"
                            className="rounded-2xl overflow-hidden shadow-lg border border-amber-200"
                        ></iframe>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-200">
                        <h2 className="text-2xl font-semibold mb-4 text-black">Get in Touch</h2>
                        <p className="mb-6 text-gray-600">Have any questions or suggestions? We’d love to hear from you!</p>
                        <form action={'https://formspree.io/f/xkgknjwg'} method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="text" className="block mb-1 font-medium">Name</label>
                                <input type="text" name="text" id="text" className="w-full border border-amber-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                <input type="email" name="email" id="email" className="w-full border border-amber-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                                <textarea name="message" id="message" rows="4" className="w-full border border-amber-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Write your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition-all shadow-md">Send Message</button>
                        </form>
                    <div className="mt-8 border-t border-amber-200 pt-4 text-sm text-gray-700">
                        <p className="flex items-center gap-2">📧 yansenbaruni@gmail.com</p>
                        <p className="flex items-center gap-2">📞 +62 896 9273 1194</p>
                        <p className="flex items-center gap-2">📍 Singkawang City, West Kalimantan</p>

                        <div className="flex items-center gap-4 mt-2">
                        🌐
                            <a href="#" className="hover:text-amber-600 underline">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-amber-600 underline">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-amber-600 underline">
                                TikTok
                            </a>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </>
    );
}
