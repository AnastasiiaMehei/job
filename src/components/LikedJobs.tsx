"use client";

import { useState, useEffect } from "react";
import JobCard from "./JobCard";

export default function LikedJobs() {
  const [likedJobs, setLikedJobs] = useState<any[]>([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("likedJobs");
    if (storedJobs) {
      setLikedJobs(JSON.parse(storedJobs));
    }
  }, []);

  const handleRemove = (jobId: string) => {
    const updatedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedJobs);
    localStorage.setItem("likedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4">
        {likedJobs.length > 0 ? (
          likedJobs.map((job) => (
            <JobCard key={job.job_id} job={job} onLike={() => handleRemove(job.job_id)} />
          ))
        ) : (
          <p className="text-center text-gray-500">No liked jobs yet.</p>
        )}
      </div>
    </div>
  );
}