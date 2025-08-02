import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login logic
    alert('Logged in successfully!');
    router.push('/user/dashboard'); // replace with your target route
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* 🌄 Background Image */}
      <img
        src="/images/landingpage1.jpg"
        alt="Fundraising Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Form */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center px-4">
        <div className="text-white text-center max-w-md w-full space-y-6 p-8 bg-white/10 rounded-xl border border-white/20 shadow-xl">
          <h1 className="text-3xl font-bold">Login to Continue</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-semibold transition"
          >
            🔐 Login
          </button>

          <p className="text-sm text-white/60">
            Don’t have an account?{' '}
            <span
              onClick={() => router.push('/signup')}
              className="text-emerald-300 underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
