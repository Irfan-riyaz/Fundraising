import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function InternDashboard() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('/api/department')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDepartments(data);
        } else {
          console.error('Expected array but got:', data);
          setDepartments([]);
        }
      })
      .catch((err) => console.error('Failed to fetch departments:', err));
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: 'url(/images/landingpage3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto bg-black/60 p-6 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-2">🎉 Welcome, Irfan Riyaz</h1>
        <p className="text-lg mb-2">
          <strong>Referral Code:</strong>{' '}
          <span className="text-green-300">irfan2025</span>
        </p>
        <p className="text-lg mb-4">
          <strong>Total Donations Raised:</strong>{' '}
          <span className="text-green-400">₹12890</span>
        </p>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">🏆 Rewards & Unlockables</h2>
          <ul className="list-disc ml-6 text-sm text-white/80">
            <li>Raise ₹5,000 – Get Social Shoutout</li>
            <li>Raise ₹10,000 – Gift Pack</li>
            <li>Raise ₹25,000 – Premium Donor Badge</li>
          </ul>
        </div>

        <div className="bg-white/10 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            📚 Departments You Can Support
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 overflow-hidden">
            {departments.length > 0 ? (
              departments.map((dept) => (
                <Link href={`/user/department/${dept._id}`} key={dept._id}>
                  <div className="cursor-pointer bg-white/10 rounded-xl p-4 border border-white/10 text-center hover:scale-105 transition-transform">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-lg font-bold mb-1">{dept.title}</h3>
                    <p className="text-sm text-white/80">{dept.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-5 text-white/60">
                No departments available yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
