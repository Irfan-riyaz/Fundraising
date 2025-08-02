// pages/index.js
import { useRouter } from 'next/router';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#2f3c7e] to-[#f0c6d8] relative text-white">
      
      {/* Background Banner Image */}
      <img
        src="/images/landingpage.jpg"
        alt="Fundraising Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="z-10 bg-black/50 backdrop-blur-md p-10 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to Fundraising Portal</h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-semibold"
          >
            🔐 Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold"
          >
            ✍️ Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
