"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// relative importi, pošto si komponente stavio u src/app/components
import { Button } from "../components/ui/button";
import AdminNav from "../components/AdminNav";
//import SessionsList from "../components/SessionsList";
import UsersList from "../components/UsersList";
//import CreateSession from "../components/CreateSession";

type AdminView = "dashboard" | "sessions" | "users" | "create";

export default function AdminDashboard() {
  const router = useRouter();

  const [view, setView] = useState<AdminView>("dashboard");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    const name = localStorage.getItem("userName");

    // ako nije logovan admin -> vrati na login
    if (!token || role !== "ADMIN") {
      router.push("/");
      return;
    }

    setUserName(name || "Admin");
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* HEADER */}
      <header className="border-b border-blue-200 bg-white/70 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* lijevo: naslov + welcome */}
          <div>
            <h1
              className="text-2xl font-bold text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #2563eb, #4f46e5)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Admin Panel
            </h1>
            <p className="text-sm text-gray-600">Welcome, {userName}</p>
          </div>

          {/* desno: NAV + Logout dugme */}
          <div className="flex items-center gap-4">
            {/* ovo je tvoj mali navbar (Dashboard / Sessions / Users / Create) */}
            <AdminNav currentView={view} onViewChange={setView} />

            <Button
              onClick={handleLogout}
              className="gap-2 border-red-300 text-red-600 hover:bg-red-50 bg-white border ml-12"
            >
              ← Logout
            </Button>
          </div>
        </div>
      </header>

      {/* GLAVNI SADRŽAJ */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Sve ispod se mijenja po current `view` state-u */}
        {view === "dashboard" && (
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {/* 3 kartice koje samo prebacuju view kad klikneš */}
            <div
              className="bg-white/95 backdrop-blur border-blue-200 cursor-pointer hover:shadow-lg transition-shadow rounded-xl p-6"
              onClick={() => setView("sessions")}
            >
              <h2 className="text-lg font-semibold text-blue-600 mb-1">
                👁️ View Sessions
              </h2>
              <p className="text-gray-600">
                View all sessions and see matching details.
              </p>
            </div>

            <div
              className="bg-white/95 backdrop-blur border-green-200 cursor-pointer hover:shadow-lg transition-shadow rounded-xl p-6"
              onClick={() => setView("users")}
            >
              <h2 className="text-lg font-semibold text-green-600 mb-1">
                👥 Manage Users
              </h2>
              <p className="text-gray-600">
                View all users and register new participants.
              </p>
            </div>

            <div
              className="bg-white/95 backdrop-blur border-red-200 cursor-pointer hover:shadow-lg transition-shadow rounded-xl p-6"
              onClick={() => setView("create")}
            >
              <h2 className="text-lg font-semibold text-red-600 mb-1">
                ➕ Create Session
              </h2>
              <p className="text-gray-600">
                Create a new secret santa session with selected algorithm.
              </p>
            </div>
          </div>
        )}

        {view === "sessions" && <SessionsList />}
        {view === "users" && <UsersList />}
        {view === "create" && (
          <CreateSession onSuccess={() => setView("sessions")} />
        )}
      </div>
    </div>
  );
}
