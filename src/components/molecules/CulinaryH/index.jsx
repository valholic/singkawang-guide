import CTArticle from "../CTArticle";

export default function CulinaryH() {
    const culinary = [
        {
            name: "Kaifon",
            desc: "A beloved Singkawang comfort dish with roasted pork, char siu, tender chicken, soy-braised egg, fresh cucumbers, and a warm savory broth.",
            img: "https://drive.google.com/thumbnail?id=11z8oBHwapuFG7COkUEx5N19F8zwWs59n&sz=s1000",
        },
        {
            name: "Bakmie Hijau",
            desc: "Green-colored noodles made from natural ingredients, served with meat, seafood, and Singkawang-style seasonings.",
            img: "https://drive.google.com/thumbnail?id=1qFEjJmdZFqhdGsYwbYUWNmXBFsiZ-ehC&sz=s1000",
        },
        {
            name: "Choipan",
            desc: "Steamed dumplings filled with shredded jicama or chives, topped with fried garlic and a light garlic sauce.",
            img: "https://drive.google.com/thumbnail?id=1jyHh_N71mqLTEFX68SzxuXxasEKNLQ44&sz=s1000",
        },
    ];


    return (
        <section id="culinary" className="py-16 w-full mx-auto px-6">
            <h3 className="text-2xl font-semibold">Culinary Highlights</h3>
            <p className="text-gray-600 mt-2">Local flavors you should try.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {culinary.map((c, i) => <CTArticle key={i} img={c.img} title={c.name} desc={c.desc} dest={`/singkawang-guide/#/culinary`} />)}
            </div>
        </section>
    )
}