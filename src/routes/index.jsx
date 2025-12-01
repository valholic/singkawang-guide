import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { About, Attraction, Contact, Culinary, Culture, Gallery, Home, Lodge, Roadmap, Transportation } from "../pages";
import { Footer, Header } from "../components";

export default function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/singkawang-guide/home" element={<Home />} />
                <Route path="/singkawang-guide/about" element={<About />} />
                <Route path="/singkawang-guide/attraction" element={<Attraction />} />
                <Route path="/singkawang-guide/lodge" element={<Lodge />} />
                <Route path="/singkawang-guide/culinary" element={<Culinary />} />
                <Route path="/singkawang-guide/transportation" element={<Transportation />} />
                <Route path="/singkawang-guide/culture" element={<Culture />} />
                <Route path="/singkawang-guide/gallery" element={<Gallery />} />
                <Route path="/singkawang-guide/contact" element={<Contact />} />
                <Route path="/singkawang-guide/roadmap" element={<Roadmap />} />
            </Routes>
            <Footer />
        </Router>
    )
}
