/* eslint-disable react/no-unescaped-entities */
import service from '../../assets/images/service.png';

const ServiceBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-pink-100">
                <div className="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto lg:px-0 px-5">
                    <img src={service} className="lg:w-1/2 rounded" />
                    <div className='lg:w-1/2 lg:pl-10'>
                        <h1 className="text-4xl font-bold">Let us handle your screen <span className='text-[#F63E7B]'>professionally </span></h1>
                        <p className="py-5 text-justify">A parlour typically refers to a room in a private home where guests are entertained. It's a space designed for socializing, relaxation, or formal gatherings. Parlours are often furnished with comfortable seating, decorative elements, and may include amenities like a fireplace or refreshments.</p>
                        <div className='flex justify-evenly'>
                            <div>
                                <h1 className='text-5xl font-bold text-[#F63E7B]'>500+</h1>
                                <p className='font-medium pt-3'>Happy Customers</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#F63E7B]'>16+</h1>
                                <p className='font-medium pt-3'>Total Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;