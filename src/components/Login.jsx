import { useState } from "react";
// import api from "../utils/api";
// import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("authToken", res.data.token);
    //   navigate("/dashboard"); // or wherever
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex w-full lg:w-1/2 p-10 justify-center items-center">
      <form className="w-full max-w-md space-y-5" onSubmit={handleLogin}>
        <h2 className="text-3xl font-semibold text-center text-purple-600">Log In</h2>
        <p className="text-sm text-center text-gray-500">Welcome back! Please enter your details</p>

        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="text-right text-sm text-purple-500 hover:underline cursor-pointer">
          forgot password?
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
        >
          Log in
        </button>

        <div className="flex items-center gap-2 justify-center">
          <div className="h-px w-16 bg-gray-300"></div>
          <span className="text-sm text-gray-400">Or Continue With</span>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="border p-2 rounded-md w-1/2 flex justify-center items-center gap-2">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="border p-2 rounded-md w-1/2 flex justify-center items-center gap-2">
            <img src="https://img.icons8.com/color/16/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span className="text-purple-500 hover:underline cursor-pointer">Sign up</span>
        </p>
      </form>
    </div>
  );
}
