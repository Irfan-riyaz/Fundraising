import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Dummy signup logic
    alert('Signup successful!');
    router.push('/user/dashboard'); // redirect to dashboard
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <img
        src="/images/landingpage2.jpg"
        alt="Fundraising Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Form */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center px-4">
        <div className="text-white text-center max-w-md w-full space-y-6 p-8 bg-white/10 rounded-xl border border-white/20 shadow-xl">
          <h1 className="text-3xl font-bold">Create an Account</h1>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold transition"
          >
            ✍️ Sign Up
          </button>

          <p className="text-sm text-white/60">
            Already have an account?{' '}
            <span
              onClick={() => router.push('/login')}
              className="text-emerald-300 underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
