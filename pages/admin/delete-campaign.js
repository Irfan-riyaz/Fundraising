// pages/admin/delete-campaign.js
import { useEffect, useState } from 'react';

export default function DeleteCampaign() {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setCampaigns(data);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this campaign?')) return;

    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      alert('Campaign deleted');
      fetchCampaigns();
    } else {
      alert('Failed to delete');
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🗑 Delete Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="bg-white/10 p-4 rounded-xl border border-white/20 shadow-lg">
            <img
              src={campaign.image}
              className="h-40 w-full object-cover rounded mb-2"
              alt={campaign.title}
            />
            <h2 className="text-lg font-bold mb-1">{campaign.title}</h2>
            <p className="text-sm text-white/70 mb-2">{campaign.description}</p>
            <p className="font-semibold text-emerald-300 mb-2">Target: ₹{campaign.price}</p>
            <button
              onClick={() => handleDelete(campaign._id)}
              className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
