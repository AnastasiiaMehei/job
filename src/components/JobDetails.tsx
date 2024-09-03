// components/JobDetails.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";


interface JobDetailsProps {
  employer_name: string;
  job_title: string;
  job_description: string;
  job_benefits: string[];
  job_apply_link: string;
  job_employment_type: string;
  job_experience_in_place_of_education: boolean;
  job_latitude: number;
  job_longitude: number;
  job_posted_at_datetime_utc: string;
  job_required_experience: {
    no_experience_required: string;
    required_experience_in_months: string;
    experience_mentioned: string;
    experience_preferred: string;
  };
  job_state: string;
  job_city: string;
}

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query; // Отримуємо id з URL
  const [job, setJob] = useState<JobDetailsProps | null>(null);

  useEffect(() => {
    if (id) {
      const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}`;
      console.log("Fetching job details from URL:", url);

      fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      })
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Failed to fetch job details");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Received job data:", data);
          setJob(data.data[0]);
        })
        .catch((error) => console.error("Error fetching job details:", error));
    }
  }, [id]);

  if (!job) {
    return <p>Loading...</p>;
  }

  const handleApply = () => {
    if (job.job_apply_link) {
      window.open(job.job_apply_link, '_blank');
    } else {
      console.log("Apply URL is not available");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      
      <h1 className="text-3xl font-bold mt-4">{job.job_title}</h1>
      <p className="text-gray-600 mt-2">Employer: {job.employer_name}</p>
      <p className="mt-4 text-gray-700">{job.job_description}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Job Details:</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Employment Type: {job.job_employment_type}</li>
          <li>Experience: {job.job_required_experience.required_experience_in_months} months</li>
          <li>Posted: {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}</li>
          <li>State: {job.job_state}</li>
          <li>City: {job.job_city}</li>
          <li>Latitude: {job.job_latitude}</li>
          <li>Longitude: {job.job_longitude}</li>
        </ul>
      </div>

      {job.job_benefits && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Job Benefits:</h2>
          <ul className="list-disc list-inside mt-2">
            {job.job_benefits.map((benefit: string) => (
              <li key={benefit} className="mb-1">{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleApply}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-8"
      >
        Apply Now
      </button>
    </div>
  );
}
