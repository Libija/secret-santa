"use client";

import { Button } from "./ui/button";

type AdminView = "dashboard" | "sessions" | "users" | "create";

interface AdminNavProps {
  currentView: AdminView;
  onViewChange: (view: AdminView) => void;
}

export default function AdminNav({ currentView, onViewChange }: AdminNavProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      <Button
        onClick={() => onViewChange("dashboard")}
        className={
          currentView === "dashboard"
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : ""
        }
      >
        Dashboard
      </Button>
      <Button
        onClick={() => onViewChange("sessions")}
        className={
          currentView === "sessions"
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : ""
        }
      >
        👁️ View Sessions
      </Button>
      <Button
        onClick={() => onViewChange("users")}
        className={
          currentView === "users"
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : ""
        }
      >
        👥 Manage Users
      </Button>
      <Button
        onClick={() => onViewChange("create")}
        className={
          currentView === "create"
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : ""
        }
      >
        ➕ Create Session
      </Button>
    </div>
  );
}
