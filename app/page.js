import { createClient } from "@/lib/supabase/server";
import { sizes, variants } from "@/lib/variants";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Our App
        </h1>
        <p className="text-gray-600 mb-8">
          We are excited to have you here. Please log in to continue.
        </p>
        {!user && <Link
          className={`${variants["ghost"]} ${sizes["base"]} flex text-center space-x-2 `}
          href="/login"
        >
          <div>Go to Login</div>
        </Link>}
        {user && <Link
          className={`${variants["ghost"]} ${sizes["base"]} flex text-center space-x-2 `}
          href="/dashboard"
        >
          <div>Go to DashBoard</div>
        </Link>}
        
      </div>
    </div>
  );
}
