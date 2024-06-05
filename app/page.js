import { sizes, variants } from "@/lib/variants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Our App
        </h1>
        <p className="text-gray-600 mb-8">
          We are excited to have you here. Please log in to continue.
        </p>
        <Link
          className={`${variants["ghost"]} ${sizes["base"]} flex text-center space-x-2 `}
          href="/login"
        >
          <div>Go to Login</div>
        </Link>
      </div>
    </div>
  );
}
