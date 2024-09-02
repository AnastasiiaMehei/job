import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";

export default function CreateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Create Profile</h1>
        <ProfileForm />
      </div>
    </div>
  );
}