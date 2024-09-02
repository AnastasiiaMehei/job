import NavBar from "../components/NavBar";
import LikedJobs from "../components/LikedJobs";

export default function LikedJobsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Liked Jobs</h1>
        <LikedJobs />
      </div>
    </div>
  );
}