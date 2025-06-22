"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <h1 className="text-xl font-bold text-blue-500">AriMayi 🐜</h1>
      {/* Hamburger menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-1 w-6 bg-gray-700 rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-1 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Desktop menu */}
      <ul className="hidden md:flex items-center justify-center space-x-6 flex-1">
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
      <ul className="hidden md:flex items-center space-x-4">
                <li>
          <Link
            href="/"
            className="text-red-500 font-medium hover:underline"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-500 to-red-400 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Déconnexion
            </button>
          </Link>
        </li>
      </ul>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="/dashboard"
                className={`block hover:underline font-medium ${
                  pathname === "/dashboard" ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className={`block hover:underline font-medium ${
                  pathname === "/clients" ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Nos Clients
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`block hover:underline font-medium ${
                  pathname === "/dashboard/profil" ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-red-500 font-medium hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  className="w-full text-white bg-gradient-to-r from-red-500 to-red-400 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  Déconnexion
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
