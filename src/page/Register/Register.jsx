import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser, profile } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                profile(name, photo)
                Swal.fire({
                    title: "Good job !",
                    text: "You you have successfully register !",
                    icon: "success"
                });
                navigate("/");
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="bg-base-200 flex items-center justify-center py-10 lg:px-0 md:px-0 px-5">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-2">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Photo URL</label>
                            <input type="photo" id="photo" name="photo" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your photo url" required />
                        </div>
                        <div className="mb-2">
                            <button type="submit" className="w-full bg-[#F63E7B] text-white py-2 px-4 rounded-lg focus:outline-none font-medium">Register</button>
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm text-center">Already have an account? <a href="/login" className="text-[#F63E7B]">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;