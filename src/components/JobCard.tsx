"use client";

import Link from "next/link";
import { useState } from "react";

interface JobCardProps {
  job: {
    job_id: string;
    job_title: string;
  };
  onLike: (job: any) => void;
}

export default function JobCard({ job, onLike }: JobCardProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(job);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <h3 className="text-xl font-bold mt-4">{job.job_title}</h3>
      <div className="mt-4 flex justify-between items-center">
        <Link href={`/job-details/${job.job_id}`} className="text-blue-500 hover:underline">
          Details
        </Link>
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded-lg ${liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          {liked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
}