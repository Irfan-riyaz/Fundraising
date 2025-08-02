export default function DashboardPage() {
  const dummyData = {
    name: 'Irfan Riyaz',
    referralCode: 'irfan2025',
    totalDonations: 12890
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <img
        src="/images/landingpage3.jpg"
        alt="Fundraising Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dashboard Card */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center p-6">
        <div className="bg-white/10 p-8 rounded-xl text-white border border-white/20 max-w-lg w-full shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">🎉 Welcome, {dummyData.name}</h1>

          <div className="space-y-4">
            <p>
              <strong>Referral Code:</strong>{' '}
              <span className="text-emerald-300">{dummyData.referralCode}</span>
            </p>
            <p>
              <strong>Total Donations Raised:</strong>{' '}
              <span className="text-emerald-300">₹{dummyData.totalDonations}</span>
            </p>
          </div>

          <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2">🏆 Rewards & Unlockables</h2>
            <ul className="list-disc list-inside text-white/80 text-sm">
              <li>Raise ₹5,000 – Get Social Shoutout</li>
              <li>Raise ₹10,000 – Gift Pack</li>
              <li>Raise ₹25,000 – Premium Donor Badge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
