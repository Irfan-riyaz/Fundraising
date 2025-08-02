// pages/admin/add-campaign.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddCampaign() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: Number(form.price) })
    });

    if (res.ok) {
      alert('Campaign added successfully');
      router.push('/admin/campaigns');
    } else {
      alert('Failed to add campaign');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-8">
      <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-xl border border-white/20">
        <h1 className="text-2xl font-bold mb-6 text-center">🎯 Add New Campaign</h1>

        <input
          className="w-full p-3 mb-4 rounded bg-white/20 text-white placeholder-white/70"
          name="title"
          placeholder="Campaign Title"
          onChange={handleChange}
        />
        <input
          className="w-full p-3 mb-4 rounded bg-white/20 text-white placeholder-white/70"
          name="description"
          placeholder="Description (what is the goal?)"
          onChange={handleChange}
        />
        <input
          className="w-full p-3 mb-4 rounded bg-white/20 text-white placeholder-white/70"
          name="price"
          type="number"
          placeholder="Target Amount (₹)"
          onChange={handleChange}
        />
        <input
          className="w-full p-3 mb-4 rounded bg-white/20 text-white placeholder-white/70"
          name="category"
          placeholder="Campaign Category"
          onChange={handleChange}
        />
        <input
          className="w-full p-3 mb-6 rounded bg-white/20 text-white placeholder-white/70"
          name="image"
          placeholder="Image Path (e.g. /images/food-drive.jpg)"
          onChange={handleChange}
        />

        <button
          onClick={handleAdd}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-bold"
        >
          ➕ Add Campaign
        </button>
      </div>
    </div>
  );
}
