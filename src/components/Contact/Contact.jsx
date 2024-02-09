

const Contact = () => {
    return (
        <div className="bg-pink-50">
            <h1 className="text-3xl text-center font-bold pt-12">Let us handle your
                <br></br>project, <span className='text-[#F63E7B]'>professionally </span></h1>
            <form className="lg:w-1/2 mx-auto py-14 lg:px-0 px-5">
                <div className="lg:flex md:flex gap-5">
                    <input type="text" placeholder="First Name" className="input border-none rounded-none focus:outline-none w-full mb-5" />
                    <input type="text" placeholder="Last Name" className="input border-none rounded-none focus:outline-none w-full mb-5" />
                </div>
                <div className="lg:flex md:flex gap-5">
                    <input type="text" placeholder="Email Address" className="input border-none rounded-none focus:outline-none w-full mb-5" />
                    <input type="text" placeholder="Phone Number" className="input border-none rounded-none focus:outline-none w-full mb-5" />
                </div>
                <div>
                    <textarea className="textarea border-none rounded-none focus:outline-none w-full mb-5 h-36" placeholder="Your Message"></textarea>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="bg-[#F63E7B] p-3 text-white font-semibold rounded">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;