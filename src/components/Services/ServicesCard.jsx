/* eslint-disable react/prop-types */


const ServicesCard = ({ service }) => {
    const { name, image, price, description } = service;
    return (
        <div>
            <div className="card card-compact h-96 rounded border border-[#F63E7B]">
                <figure><img src={image} alt="" className="h-40 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-justify">{description}</p>
                    <div>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star-half-stroke text-yellow-500"></i>
                    </div>
                    <p className="text-[#F63E7B] font-medium">Price : {price}</p>
                    <div className="card-actions">
                        <button className="bg-[#F63E7B] p-3 rounded text-white font-semibold w-full">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;