import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 via-green-400 to-green-600 text-white px-4">
      <img
        src="/images/success.png"
        alt="Success"
        className="w-60 h-60 object-contain mb-6"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Thank You for Your Contribution!</h1>
        <p className="text-lg mb-6">
          Your donation has been successfully processed. You're making a real difference!
        </p>
        <p className="text-sm text-white/70">Redirecting to homepage in 5 seconds...</p>
      </div>
    </div>
  );
}
