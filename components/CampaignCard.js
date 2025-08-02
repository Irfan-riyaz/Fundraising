// components/ProductCard.js (used for displaying fundraising campaigns)
import React from 'react';

export default function ProductCard({ campaign, onAddToCart, onImageClick }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
      <img
        src={campaign.image}
        alt={campaign.title}
        onClick={() => onImageClick(campaign.image)}
        className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition"
      />

      <h2 className="text-xl font-bold mb-1">{campaign.title}</h2>
      <p className="text-white/70 text-sm mb-2">{campaign.description}</p>
      <p className="text-lg font-semibold text-emerald-300 mb-4">₹{campaign.price}</p>

      <button
        onClick={() => onAddToCart(campaign)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition"
      >
        🤝 Contribute
      </button>
    </div>
  );
}
