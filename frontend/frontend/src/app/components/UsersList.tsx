"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import RegisterUserModal from "./RegisterUserModal";
import { User } from "../../../types/User"
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";





export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        setIsLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message ?? "Failed to load users");
        setIsLoading(false);
        return;
      }

      // backend: { users: [...] }
      setUsers(data.users ?? []);
    } catch (err) {
      console.error("Load users error:", err);
      setError("Failed to load users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadUsers();
  }, []);

  const handleToggleStatus = async (user: User) => {
    const nextActive = !user.isActive;
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        return;
      }

      const res = await fetch(
        `${API_BASE_URL}/users/${user.id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ isActive: nextActive }),
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message ?? "Failed to update status");
        return;
      }

      // backend vraća updated user -> updejtamo listu
      const updated = data as User;
      setUsers((prev) =>
        prev.map((u) => (u.id === updated.id ? updated : u))
      );
    } catch (err) {
      console.error("Update status error:", err);
      setError("Failed to update status");
    }
  };

  const handleUserCreated = () => {
    setShowRegisterModal(false);
    // nakon registracije refrešujemo listu
    void loadUsers();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-blue-600 text-2xl animate-spin">⏳</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          All Users ({users.length})
        </h2>
        <Button
          onClick={() => setShowRegisterModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          ➕ Register New User
        </Button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      <div className="grid gap-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="bg-white/95 backdrop-blur border-blue-200"
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      user.role === "ADMIN"
                        ? "bg-purple-600 text-white"
                        : "bg-blue-600 text-white"
                    }
                  >
                    {user.role}
                  </Badge>
                  <Button
                    onClick={() => handleToggleStatus(user)}
                    className={`font-semibold px-4 py-2 rounded transition-all ${
                      user.isActive
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                  >
                    {user.isActive ? "✓ Active" : "✕ Inactive"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <RegisterUserModal
        open={showRegisterModal}
        onOpenChange={setShowRegisterModal}
        onSuccess={handleUserCreated}
      />
    </div>
  );
}
