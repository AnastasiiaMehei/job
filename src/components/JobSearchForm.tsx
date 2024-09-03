"use client";

import { useState } from "react";
import JobCard from "./JobCard";

interface JobSearchFormProps {
  onLike: (job: any) => void;
}

export default function JobSearchForm({ onLike }: JobSearchFormProps) {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log('Starting job search');
    console.log('API Host:', process.env.NEXT_PUBLIC_RAPIDAPI_HOST);
    console.log('Query:', query);
  
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/search?query=${query}&num_pages=1`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
          },
        }
      );
  
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
  
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
  
      const data = await response.json();
      console.log('Received job data:', data);
      setJobs(data.data); // Assuming the API returns an array of jobs in `data.data`
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <form onSubmit={handleSearch} className="flex space-x-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter job title..."
          className="border border-gray-300 p-2 w-full rounded"        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"        >
          Search
        </button>
      </form>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {jobs.map((job: any) => (
          <JobCard key={job.job_id} job={job} onLike={onLike} />
        ))}
      </div>
    </div>
  );
}