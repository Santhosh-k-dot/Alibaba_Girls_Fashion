import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';

const Login = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password };

        try {
            const response = await loginUser(data).unwrap();
            console.log(response);
            const { token, user } = response;
            dispatch(setUser({ user, token }));
            alert("Login successful");
            navigate("/");
        } catch (error) {
            console.error(error);
            setMessage("Please provide a valid email and password");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            {/* Left Side - Image Section */}
            <div className="hidden lg:flex lg:w-3/4 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D')" }}></div>

            {/* Right Side - Login Form */}
            <div className="flex flex-col justify-center items-center lg:w-1/4 w-full p-8 bg-gray-800 shadow-lg">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white mb-6 text-right">Please Login</h2>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className="w-full bg-gray-700 text-white focus:outline-none px-5 py-3 border rounded-md"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full bg-gray-700 text-white focus:outline-none px-5 py-3 border rounded-md"
                        />

                        {message && <p className="text-red-500 text-sm text-right">{message}</p>}

                        <button
                            type="submit"
                            disabled={loginLoading}
                            className={`w-full mt-5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-md ${loginLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loginLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="my-5 text-right text-white">
                        Don't have an account?
                        <Link to="/register" className="text-blue-400 italic"> Register</Link> here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
