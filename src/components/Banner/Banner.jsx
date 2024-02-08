/* eslint-disable react/no-unescaped-entities */
import girl from '../../assets/images/girl.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-pink-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={girl} className="lg:w-1/2" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p className="py-5 text-justify">A parlour typically refers to a room in a private home where guests are entertained. It's a space designed for socializing, relaxation, or formal gatherings. Parlours are often furnished with comfortable seating, decorative elements, and may include amenities like a fireplace or refreshments. The term can also be used to describe certain businesses, such as beauty parlours or tattoo parlours, which provide specific services to customers in a similar social setting.</p>
                        <button className="bg-[#F63E7B] p-3 text-white font-semibold rounded">Get an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;