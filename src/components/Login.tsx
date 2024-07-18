import axios from 'axios'
import React, { useState } from 'react'
import { FaGlobe, FaGoogle } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username,
          password,
        })
        
        console.log('Login Successful:', response.data)
        navigate('/dashboard')
        // handle successful login
      } catch (err) {
        setError('Invalid username or password')
      }
    }
  
  return (
    <div className="min-h-screen flex items-center justify-start bg-custom p-4 sm:p-6 md:p-8">
    <div className="bg-white p-6 md:p-8 lg:p-10 rounded shadow-md w-full max-w-md">
      <div className="flex items-center justify-start mb-4">
        <FaGlobe className="h-5 w-5 text-green-700" />
        <span className="text-green-700 ms-2 font-bold text-xl">logoipsum</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-start">Welcome<br />back</h2>
      <div>
        <p className="text-gray-500 text-start">You need to be signed in to access the project dashboard.</p>
      </div>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
          <label className="block text-black-700 text-sm mb-2 text-start">Email or username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="wesley.mendoza@example.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-black-700 text-sm text-start mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="....."
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center text-gray-700 text-sm">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
            />
            Keep me signed in
          </label>
          <a href="#" className="inline-block align-baseline text-sm text-black-500 underline hover:text-green-700">
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between mb-2">
          <button
            type="submit"
            className="bg-green-300 hover:bg-green-700 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-white hover:bg-green-700 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2 border"
          >
            <FaGoogle className="h-5 w-5" />
            <span className="text-black">Sign In with Google</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-2 mb-4">
          <p className="text-center text-xs">
            Haven't joined yet?<span className="underline">Sign up</span>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login