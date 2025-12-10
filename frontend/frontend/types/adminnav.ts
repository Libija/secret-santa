export type AdminView = "dashboard" | "sessions" | "users" | "create";

export interface AdminNavProps {
  currentView: AdminView;
  onViewChange: (view: AdminView) => void;
}