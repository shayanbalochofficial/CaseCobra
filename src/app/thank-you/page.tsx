import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Thank You for Ordering! 🎉
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Your order is being prepared. Please wait patiently — it's on the way! 🚚
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
