import { useState } from "react";
import NavBar from "../components/NavBar";
import JobSearchForm from "../components/JobSearchForm";

export default function JobSearchPage() {
  const [likedJobs, setLikedJobs] = useState<any[]>([]);

  const handleLike = (job: any) => {
    const updatedLikedJobs = [...likedJobs, job];
    setLikedJobs(updatedLikedJobs);
    localStorage.setItem("likedJobs", JSON.stringify(updatedLikedJobs));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Job Search</h1>
        <JobSearchForm onLike={handleLike} />
      </div>
    </div>
  );
}