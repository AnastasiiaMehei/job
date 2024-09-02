"use client";
// import useSWR from 'swr';
// import fetcher from '../utils/fetcher';
import { useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [query, setQuery] = useState('');
  // const { data, error } = useSWR(
  //   query ? `https://${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/search?query=${query}` : null,
  //   fetcher
  // );

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setQuery((e.target as HTMLFormElement).query.value);
  // };

  return (
    <>
      <Header />
      {/* <div className="container mx-auto p-4">
        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            name="query"
            placeholder="Search for jobs..."
            className="border p-3 rounded w-full text-lg text-black-400"
          />
          <button type="submit" className="bg-blue-500 text-white p-3 rounded mt-4 w-full text-lg">
            Search
          </button>
        </form>
        {error && <div className="text-red-500">Failed to load jobs</div>}
        {!data && <div>Loading...</div>}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.data.map((job: any) => (
              <div key={job.job_id} className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
                <h2 className="text-xl font-bold mb-2">{job.job_title}</h2>
                <p className="text-gray-700 mb-4">{job.employer_name}</p>
                <a href={`/job-details/${job.job_id}`} className="text-blue-500 hover:underline">
                  Details
                </a>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </>
  );
}