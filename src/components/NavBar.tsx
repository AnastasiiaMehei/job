"use client";

import Link from "next/link";
import "../styles/globals.css";

export default function NavBar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-center space-x-4">
        <Link href="/job-search" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">
          Search jobs
        </Link>
        <Link href="/liked" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">
          Liked jobs
        </Link>
        <Link href="/create-profile" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">
          Create profile
        </Link>
        <Link href="/jobs" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">
          Jobs
        </Link>
      </div>
    </nav>
  );
}