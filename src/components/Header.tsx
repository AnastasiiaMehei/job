"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/globals.css";


export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Job Finder</h1>
        <nav className="space-x-4">
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
          <Link href="/register" className="text-white hover:underline">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}