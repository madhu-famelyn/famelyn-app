import HeroLandingPage from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Services from "./Services/Services";
import Process from "./Process/Process";
import Metrics from "./Metrics/Metrics";
import Testimonials from "./Testimonials/Testimonials";
import CTASection from "./CTASection/CTASection";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "../Page/Header/Header";

function LandingPage() {
    return(
        <>
        <Header/>
        <HeroLandingPage/>
        <Stats/>
        <Services/>
        <Process/>
        <Metrics/>
        <Testimonials/>
        <CTASection/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default LandingPage;