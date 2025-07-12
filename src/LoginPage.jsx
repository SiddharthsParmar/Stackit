import React from 'react'
import Login from './components/Login.jsx'
const LoginPage = () => {
  return (
   <>
    <div className="flex flex-col lg:flex-row h-screen rounded-2xl p-5">
      <div className="bg-white flex-1 flex justify-center items-center">
        <Login />
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <img
          src="https://img.pikbest.com/wp/202347/function-online-illustration-of-a-3d-social-media-platform-with-communication-tools-and-chat-on-light-blue-background_9746191.jpg!bw700" // Add image in `public/` folder
          alt="Fitness"
          className="w-3/4 rounded-xl shadow-lg"
        />
      </div>
    </div>
   </>
  )
}

export default LoginPage