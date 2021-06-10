import React from 'react'
import '../styles/styles.css'

function App() {
  return (
  
       <div class="bg-grey-700 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
                    <input 
                        type="tel"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phonenumber"
                        placeholder="Enter Mobile Number"
                        />
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Send OTP</button>

                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  
 
  )
}

export default App
