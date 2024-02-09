import Banner from "../../components/Banner/Banner";
import ServiceBanner from "../../components/Banner/ServiceBanner";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;