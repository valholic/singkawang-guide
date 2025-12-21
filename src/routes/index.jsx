import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { About, Attraction, Contact, Culinary, Culture, Gallery, Home, Lodge, Roadmap, Transportation } from "../pages";
import { Footer, Header } from "../components";

export default function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/attraction" element={<Attraction />} />
                <Route path="/lodge" element={<Lodge />} />
                <Route path="/culinary" element={<Culinary />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
            <Footer />
        </Router>
    )
}
