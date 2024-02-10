import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold pt-14">Our Awesome <span className="text-[#F63E7B]">Services</span></h1>
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5 py-10">
                {
                    services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;