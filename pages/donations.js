// pages/cart.js
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Dynamically import the context
const useCartSafe = () => {
  if (typeof window === 'undefined') return { cart: [], setCart: () => {} };

  try {
    const { useCart } = require('../components/DonationContext');
    return useCart();
  } catch {
    return { cart: [], setCart: () => {} };
  }
};

export default function DonationCartPage() {
  const { cart, setCart } = useCartSafe();
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🤝 Your Donations</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-white/80">
          Your donation list is empty.
        </p>
      ) : (
        <>
          <div className="max-w-3xl mx-auto space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white/10 border border-white/20 p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-white/70">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-white/70">
                      ₹{item.price} each
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-2xl font-bold">
              Total: ₹{totalAmount}
            </p>

            <button
              onClick={() => router.push('/checkout')}
              className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg shadow-lg"
            >
              ✅ Proceed to Donate
            </button>
          </div>
        </>
      )}
    </div>
  );
}
