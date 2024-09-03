import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import JobSearchForm from "../components/JobSearchForm";
import JobCard from "../components/JobCard";

export default function JobsPage() {
  const [profile, setProfile] = useState<any>(null);
  const [recommendedJobs, setRecommendedJobs] = useState<any[]>([]);

  useEffect(() => {
    // Отримуємо профіль користувача з localStorage
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      fetchRecommendedJobs(parsedProfile);
    }
  }, []);

  const fetchRecommendedJobs = async (profile: any) => {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/search?query=${profile.desiredPosition}&num_pages=1`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommended jobs");
      }

      const data = await response.json();
      setRecommendedJobs(data.data);
    } catch (error) {
      console.error("Error fetching recommended jobs:", error);
    }
  };

  const handleLike = (job: any) => {
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    const updatedLikedJobs = [...likedJobs, job];
    localStorage.setItem("likedJobs", JSON.stringify(updatedLikedJobs));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-blue">Jobs</h1>

        <JobSearchForm onLike={handleLike} />

        {profile && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue">Recommended Jobs</h2>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {recommendedJobs.map((job) => (
                <JobCard key={job.job_id} job={job} onLike={handleLike} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}