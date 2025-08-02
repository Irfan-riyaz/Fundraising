import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-10">
      <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        {/* Summary Section */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-6">
          <h2 className="text-xl font-semibold mb-2">📊 Overview</h2>
          <p>Total Campaigns: <span className="font-bold">12</span></p>
          <p>Total Donations Raised: <span className="font-bold">₹12890</span></p>
        </div>

        {/* Actions */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20">
          <h2 className="text-xl font-semibold mb-4">⚙️ Manage</h2>

          <button
            onClick={() => router.push('/admin/add-campaign')}
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg mt-2 font-semibold"
          >
            ➕ Add Campaign
          </button>

          <button
            onClick={() => router.push('/admin/delete-campaign')}
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3 font-semibold"
          >
            🗑 Delete Campaign
          </button>

          <button
            onClick={() => router.push('/cart')}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mt-3 font-semibold"
          >
            📦 View Donation Cart
          </button>
        </div>

        <p className="text-center text-white/70 text-sm mt-6">
          Logged in as admin. You can manage fundraising campaigns here.
        </p>
      </div>
    </div>
  );
}
