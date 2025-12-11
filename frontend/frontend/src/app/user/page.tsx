"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { GiftResponse } from "../../../types/user"

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

0

export default function UserDashboard() {
  const [userName, setUserName] = useState("");
  const [giftInfo, setGiftInfo] = useState<GiftResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (!token) {
      window.location.href = "/";
      return;
    }

    setUserName(name || "User");

    fetchGiftInfo(token);
  }, []);

  const fetchGiftInfo = async (token: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/sessions/me/latest`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        
        setError(data?.message ?? "No session yet");
        setGiftInfo(null);
        return;
      }

      setGiftInfo(data);
    } catch (err) {
      console.error("Fetch gift error:", err);
      setError("Failed to load gift info");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 overflow-hidden">
      <div className="relative">
        {}
        <header className="p-4 flex justify-end">
          <Button
            onClick={handleLogout}
            className="gap-2 border-red-300 text-red-600 hover:bg-red-50 bg-white border"
          >
            ← Logout
          </Button>
        </header>

        {}
        <div className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 100px)" }}>
          <div className="max-w-md w-full px-4">
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-gradient-to-br from-green-400 to-red-400 rounded-full shadow-lg mb-4 pulse">
                <span className="text-4xl">🎁</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome, {userName}!
              </h1>
              <p className="text-gray-600">Your Secret Santa Assignment</p>
            </div>

            {}
            {isLoading && (
              <Card>
                <CardContent className="pt-6 text-center text-gray-500">
                  Loading...
                </CardContent>
              </Card>
            )}

            {}
            {!isLoading && error && (
              <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-gray-300 shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-3">
                  <span className="text-4xl">❄️</span>
                  <p className="text-xl font-semibold">
                    No session yet
                  </p>
                  <p className="text-gray-600">
                    An admin will create a session soon. Check back later!
                  </p>
                </CardContent>
              </Card>
            )}

            {}
            {!isLoading && giftInfo?.isUnmatched && (
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <span className="text-4xl">❄️</span>
                  <p className="text-xl font-semibold">
                    You were not matched
                  </p>
                  <p className="text-gray-600">
                    In this session you didn’t get a receiver.
                  </p>
                </CardContent>
              </Card>
            )}

            {}
            {!isLoading && giftInfo && !giftInfo.isUnmatched && giftInfo.receiver && (
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center space-y-6">
                    <div className="inline-block p-4 bg-white rounded-full shadow">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-lg mb-2">
                        You are buying a gift for:
                      </p>
                      <p className="text-3xl font-bold text-blue-600">
                        {giftInfo.receiver.firstName}{" "}
                        {giftInfo.receiver.lastName}
                      </p>
                    </div>
                    <div className="pt-4 text-sm text-gray-500 bg-white rounded-lg p-4">
                      🎁 Keep it secret! 🎁
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
