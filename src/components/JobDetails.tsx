"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Fetch job details by ID
      fetch(`https://${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/job-details/${id}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch job details");
          }
          return response.json();
        })
        .then((data) => setJob(data))
        .catch((error) => console.error("Error fetching job details:", error));
    }
  }, [id]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <Image
        src={job.job_image_url}
        alt={job.job_title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{job.job_title}</h1>
      <p className="text-gray-600 mt-2">Employer: {job.employer_name}</p>
      <p className="text-gray-500 mt-2">Location: {job.job_location}</p>
      <p className="mt-4 text-gray-700">{job.job_description}</p>
    </div>
  );
}