"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-blue-500">AriMayi 🐜</h1>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/dashboard"
            className={`hover:underline font-medium ${
              pathname === "/dashboard" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/clients"
            className={`hover:underline font-medium ${
              pathname === "/clients" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Nos Clients
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={`hover:underline font-medium ${
              pathname === "/dashboard/profil" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Profile
          </Link>
        </li>
        </ul>
        <ul>
        <li>
          <Link
            href="/"
            className="text-red-500 font-medium hover:underline"
          >
            <button type="button" className="text-white bg-gradient-to-r from-red-500 to-red-400 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Déconnexion</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
