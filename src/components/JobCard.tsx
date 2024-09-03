// components/JobCard.tsx
import Link from "next/link";
import { useState } from "react";
import "../styles/globals.css";

interface JobCardProps {
  job: {
    job_id: string;
    job_title: string};
  onLike: (jobId: string) => void;
}

export default function JobCard({ job, onLike }: JobCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    onLike(job.job_id);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
   <h3 className="text-xl font-bold mt-4">{job.job_title}</h3>
      <div className="mt-4 flex justify-between items-center">
        <Link href={`/job-details/${job.job_id}`} className="text-blue-500 hover:underline">
          Details
        </Link>
        <button
          onClick={handleToggleLike}
          className={`px-4 py-2 rounded-lg ${isLiked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"} focus:outline-none`}
          aria-label={isLiked ? "Unlike this job" : "Like this job"}
        >
          {isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
}
