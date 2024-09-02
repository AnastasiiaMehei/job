"use client";

import { useState } from "react";
import { useRouter } from "next/router";

export default function ProfileForm() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    desiredPosition: "",
    aboutMe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    router.push("/job-search");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Desired Position</label>
          <input
            type="text"
            name="desiredPosition"
            value={profile.desiredPosition}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">About Me</label>
          <textarea
            name="aboutMe"
            value={profile.aboutMe}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}