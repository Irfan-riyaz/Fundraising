// pages/user/campaigns.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../components/DonationContext'; // You can later rename this to DonationContext if desired
import ImageSpinModal from '../../components/CartContext';

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);
  const { cart, setCart } = useCart();
  const [modalImage, setModalImage] = useState(null);
  const [toast, setToast] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products') // 🔁 You may rename API to /api/campaigns later
      .then((res) => res.json())
      .then(setCampaigns)
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  const addToCart = (campaign) => {
    const exists = cart.find((item) => item._id === campaign._id);
    if (exists) {
      const updatedCart = cart.map((item) =>
        item._id === campaign._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...campaign, quantity: 1 }]);
    }

    setToast(`${campaign.title} added to donations`);
    setTimeout(() => setToast(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">🎯 Support a Campaign</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {campaigns.map((campaign) => {
          const goal = campaign.goalAmount || campaign.price || 10000;
          const raised = campaign.raisedAmount || 0;
          const percentRaised = Math.min(Math.round((raised / goal) * 100), 100);

          return (
            <div
              key={campaign._id}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                onClick={() => setModalImage(campaign.image)}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition"
              />
              <h2 className="text-xl font-bold mb-1">{campaign.title}</h2>
              <p className="text-white/70 text-sm mb-2">{campaign.description}</p>

              {/* 🟦 Progress Bar */}
              <div className="w-full bg-gray-300/40 rounded-full h-3 mb-2">
                <div
                  className="bg-green-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentRaised}%` }}
                ></div>
              </div>
              <p className="text-sm text-white/70 mb-4">
                ₹{raised} raised of ₹{goal}
              </p>

              {/* 💸 Contribute Button */}
              <button
                onClick={() => addToCart(campaign)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition"
              >
                🤝 Contribute
              </button>

              {toast && (
                <div className="fixed bottom-24 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                  {toast}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 📦 View Donation Cart */}
      <div className="w-full text-center mt-16">
        <button
          onClick={() => router.push('/cart')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg"
        >
          💼 View Donations
        </button>
      </div>

      {/* 🖼️ Full Image Modal with 360 spin */}
      {modalImage && (
        <ImageSpinModal
          image={modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
}
