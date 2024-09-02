
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Search</h1>
        <nav>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
              Logout 
            </button>
          ) : (
            <>
               <Link href="/login">
            <a className="text-white hover:underline">Login</a>
          </Link>
          <Link href="/register">
            <a className="text-white hover:underline">Register</a>
          </Link>
            </>
          )}
        </nav>
      </div>
      
    </header>
  );
}