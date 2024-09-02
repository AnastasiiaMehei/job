import { useEffect } from "react";
import { useRouter } from "next/router";
import JobSearchForm from "../components/JobSearchForm";

export default function JobSearchPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center">Job Search</h1>
      <JobSearchForm />
    </div>
  );
}