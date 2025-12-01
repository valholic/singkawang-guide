import { Link } from "react-router-dom";
import { Funfact, History } from "../../components";
import { Temple2 } from "../../assets";
import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Singkawang | History, Culture, and City Overview</title>
                <meta name="description" content="Learn about Singkawang: a coastal city rich with Chinese, Malay, and Dayak heritage, famous for its thousand temples, history, festivals, and multicultural roots" />
                <meta name="keywords" content="Singkawang history, About Singkawang, Singkawang culture, Singkawang Hakka, Singkawang heritage, Singkawang temples, City of Thousand Temples, Singkawang timeline, Singkawang multicultural, Chinese Malay Dayak culture, West Kalimantan history, Singkawang festivals, Cap Go Meh Singkawang" />
            </Helmet>
            <main className="max-w-6xl mx-auto px-6 py-12 font-Ubuntu text-gray-800">
                {/* Page heading */}
                <section className="mb-12 flex flex-col-reverse md:flex-row gap-y-5 md:gap-x-5 lg:gap-x-10 items-center">
                    <div className="h-fit flex flex-col gap-y-4 md:w-1/2">
                        <h1 className="text-3xl font-extrabold">About Singkawang</h1>
                        <p className="text-gray-600 text-justify">Singkawang or San-Khew-Jong(山口洋) is a coastal city and port located in the province of West Kalimantan, on the island of Borneo in Indonesia. It is located at about 145 km north of Pontianak, the provincial capital, and is surrounded by the Pasi, Poteng, and Sakkok mountains. In addition, the ancestors of the Hakka Chinese community named this area in Hakka as "San-Khew-Jong" (Mount-Mouth-Sea), which means "A city located at the foot of a mountain near the sea and has a river that flows up to the mouth of the river (estuary)."</p>
                    </div>
                    <img src={Temple2} alt="Singkawang" className="md:w-1/2 h-80 object-cover rounded-xl shadow-2xl" />
                </section>
                <Funfact />
                <History />
                {/* Call-to-action or link to other pages */}
                <section className="mt-12">
                    <div className="rounded-xl border p-6 bg-yellow-50">
                        <h3 className="font-semibold">Want more details?</h3>
                        <p className="mt-2 text-sm text-gray-700">Visit the&nbsp;
                            <a href={'/gallery'} className="cursor-pointer underline">Gallery</a>,&nbsp;  
                            <a href={'/culture'} className="cursor-pointer underline">Cultures</a>, or&nbsp; 
                            <a href={'/roadmap'} className="cursor-pointer underline">Roadmap</a>&nbsp; 
                            pages for photos and first-hand stories.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}