/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import google from '../../assets/icons/google.jpg';

const Login = () => {
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center py-10 lg:px-0 px-5">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-[#F63E7B] py-2 px-4 rounded-lg font-medium text-white">Login</button>
                        </div>
                        <div className="mb-6 flex justify-center items-center">
                            <img className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm text-center">Don't have an account? <Link to="/register" className="text-[#F63E7B]">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;