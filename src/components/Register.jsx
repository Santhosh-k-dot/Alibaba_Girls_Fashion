import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { username, email, password };

    try {
      await registerUser(data).unwrap();
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side - Image Section */}
      <div
        className="hidden lg:flex lg:w-3/4 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=pexels-pixabay-269583.jpg&fm=jpg')",
        }}
      ></div>

<div className="flex flex-col justify-center items-center lg:w-1/4 w-full p-8 bg-gray-900 shadow-lg">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white mb-6 text-right">Create an Account</h2>
                    <form onSubmit={handleRegister} className="space-y-5">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                            className="w-full bg-gray-800 text-white focus:outline-none px-5 py-3 border border-gray-700 rounded-md"
                        />

                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className="w-full bg-gray-800 text-white focus:outline-none px-5 py-3 border border-gray-700 rounded-md"
                        />

                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full bg-gray-800 text-white focus:outline-none px-5 py-3 border border-gray-700 rounded-md"
                        />

                        {message && (
                            <p className="text-red-500 text-sm text-right">{message}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
                        >
                            {isLoading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <p className="my-5 text-right  text-white">
                        Already have an account?
                        <Link to="/login" className="text-blue-400 italic"> Login</Link> here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

