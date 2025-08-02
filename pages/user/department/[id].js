import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DepartmentDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [department, setDepartment] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [donationCompleted, setDonationCompleted] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/department/${id}`)
        .then((res) => res.json())
        .then(setDepartment)
        .catch((err) => console.error('Failed to fetch department:', err));
    }
  }, [id]);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10 text-white"
      style={{ backgroundImage: "url('/images/landingpage3.jpg')" }}
    >
      <div className="max-w-6xl mx-auto bg-black/60 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Title + Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{department.title}</h1>
          <p className="text-white/80 leading-relaxed text-lg">
            {department.longDescription || department.description || "This department is working towards a better future. Your support makes a big impact. Join the movement by contributing today!"}
          </p>
        </div>

        {/* Right Side - Donate Section (without image box) */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {!showQR && !donationCompleted && (
            <button
              onClick={() => setShowQR(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition"
            >
              🤝 Donate Now
            </button>
          )}

          {showQR && !donationCompleted && (
            <>
              <img
                src="/images/qr.png"
                alt="Scan QR to Donate"
                className="w-64 h-64 object-contain mb-4 rounded-lg shadow-md"
              />
              <button
                onClick={() => setDonationCompleted(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full"
              >
                ✅ Completed
              </button>
            </>
          )}

          {donationCompleted && (
            <>
              <img
                src="/images/success.jpg"
                alt="Donation Success"
                className="w-64 h-64 object-contain mb-4 rounded-lg shadow-md"
              />
              <button
                onClick={() => router.push('/user/dashboard')}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              >
                🔙 Back to Dashboard
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
