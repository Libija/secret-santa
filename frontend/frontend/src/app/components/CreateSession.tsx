"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CreateSessionProps } from "../../../types/session"

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";



export default function CreateSession({ onSuccess }: CreateSessionProps) {
  const [mode, setMode] = useState<"NAIVE" | "OPTIMAL">("OPTIMAL");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreate = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        setIsLoading(false);
        return;
      }

      // biramo endpoint na osnovu moda
      const url =
        mode === "OPTIMAL"
          ? `${API_BASE_URL}/sessions/generate-optimal`
          : `${API_BASE_URL}/sessions/generate-naive`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const message =
          data?.message ??
          (res.status === 400
            ? "At least two active users are required"
            : "Failed to create session");
        setError(message);
        return;
      }

      // backend vraća cijeli session objekt, ima id
      setSuccess(`Session created successfully! Session ID: ${data.id}`);

      // po želji resetujemo na OPTIMAL
      setMode("OPTIMAL");

      // obavijestimo parent (AdminDashboard) da je gotovo -> prebaci na "sessions"
      onSuccess();
    } catch (err) {
      console.error("Create session error:", err);
      setError("Failed to create session");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-white/95 backdrop-blur border-blue-200 mt-10">
      <CardHeader className="bg-gradient-to-r from-red-50 to-green-50">
        <CardTitle>Create New Session</CardTitle>
        <CardDescription>
          Choose an algorithm for matching participants
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            <span>✅</span>
            <span>{success}</span>
          </div>
        )}

        <div className="space-y-3">
          <label
            className="flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all"
            style={{
              borderColor: mode === "OPTIMAL" ? "#2563eb" : "#e5e7eb",
              backgroundColor: mode === "OPTIMAL" ? "#dbeafe" : "#f9fafb",
            }}
          >
            <input
              type="radio"
              name="algorithm"
              value="OPTIMAL"
              checked={mode === "OPTIMAL"}
              onChange={(e) =>
                setMode(e.target.value as "OPTIMAL" | "NAIVE")
              }
              disabled={isLoading}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold text-gray-900">Optimal Algorithm</p>
              <p className="text-sm text-gray-600">
                Ensures perfect matching. Everyone gets paired and gives a gift.
              </p>
            </div>
          </label>

          <label
            className="flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all"
            style={{
              borderColor: mode === "NAIVE" ? "#2563eb" : "#e5e7eb",
              backgroundColor: mode === "NAIVE" ? "#dbeafe" : "#f9fafb",
            }}
          >
            <input
              type="radio"
              name="algorithm"
              value="NAIVE"
              checked={mode === "NAIVE"}
              onChange={(e) =>
                setMode(e.target.value as "OPTIMAL" | "NAIVE")
              }
              disabled={isLoading}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold text-gray-900">Naive Algorithm</p>
              <p className="text-sm text-gray-600">
                Random matching. Some users might not get paired.
              </p>
            </div>
          </label>
        </div>

        <Button
          onClick={handleCreate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white hover:from-green-700 hover:to-red-700 py-2.5 font-semibold"
        >
          {isLoading ? "Creating... ⏳" : "Create Session 🎄"}
        </Button>
      </CardContent>
    </Card>
  );
}
