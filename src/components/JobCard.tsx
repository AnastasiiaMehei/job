"use client";

interface JobCardProps {
  job: {
    job_id: string;
    employer_name: string;
    job_title: string;
    job_description: string;
    job_location: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold">{job.job_title}</h3>
      <p className="text-gray-600">{job.employer_name}</p>
      <p className="text-gray-500">{job.job_location}</p>
      <p className="mt-2 text-gray-700">{job.job_description}</p>
    </div>
  );
}