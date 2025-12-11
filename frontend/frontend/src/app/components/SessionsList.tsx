"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  SessionSummary,
  SessionPairDetail,
  SessionDetails,
} from "../../../types/session";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export default function SessionsList() {
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [expandedSessionId, setExpandedSessionId] =
    useState<number | null>(null);
  const [detailsById, setDetailsById] = useState<
    Record<number, SessionDetails | null>
  >({});
  const [detailsLoadingId, setDetailsLoadingId] = useState<number | null>(null);

  
  const loadSessions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        setIsLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/sessions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message ?? "Failed to load sessions");
        setIsLoading(false);
        return;
      }

      
      const list = (data?.sessions ?? []) as SessionSummary[];
      setSessions(list);
    } catch (err) {
      console.error("Load sessions error:", err);
      setError("Failed to load sessions");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadSessions();
  }, []);

 
  const loadSessionDetails = async (sessionId: number) => {
    
    if (detailsById[sessionId]) {
      return;
    }

    setDetailsLoadingId(sessionId);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        setDetailsLoadingId(null);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/sessions/${sessionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message ?? "Failed to load session details");
        setDetailsLoadingId(null);
        return;
      }


      const rawPairs = (data?.pairs ?? []) as any[];
      const rawUnmatched = (data?.unmatchedUsers ?? []) as any[];

      const pairs: SessionPairDetail[] = rawPairs.map((p) => ({
        id: p.id,
        giver: `${p.giver.firstName} ${p.giver.lastName}`,
        receiver: `${p.receiver.firstName} ${p.receiver.lastName}`,
      }));

      const unmatchedUsers = rawUnmatched.map((u) => ({
        id: u.user.id,
        fullName: `${u.user.firstName} ${u.user.lastName}`,
      }));

      const details: SessionDetails = {
        id: data.id,
        pairs,
        unmatchedCount: rawUnmatched.length ?? 0,
        unmatchedUsers,
      };

      setDetailsById((prev) => ({
        ...prev,
        [sessionId]: details,
      }));
    } catch (err) {
      console.error("Load session details error:", err);
      setError("Failed to load session details");
    } finally {
      setDetailsLoadingId(null);
    }
  };

  const handleToggleExpand = async (sessionId: number) => {
    if (expandedSessionId === sessionId) {
      setExpandedSessionId(null);
      return;
    }

    
    await loadSessionDetails(sessionId);
    setExpandedSessionId(sessionId);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-blue-600 text-2xl animate-spin">⏳</div>
      </div>
    );
  }

  
  const latestSessionId =
    sessions.length > 0
      ? sessions.reduce(
          (acc, s) => {
            const t = new Date(s.createdAt).getTime();
            if (t > acc.time) {
              return { id: s.id, time: t };
            }
            return acc;
          },
          {
            id: sessions[0].id,
            time: new Date(sessions[0].createdAt).getTime(),
          }
        ).id
      : null;

  return (
    <div className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {sessions.length === 0 ? (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6 text-center text-gray-600">
            No sessions created yet
          </CardContent>
        </Card>
      ) : (
        sessions.map((session) => {
          const details = detailsById[session.id] ?? null;
          const isExpanded = expandedSessionId === session.id;
          const isLatest = latestSessionId === session.id;

          const pairCount = details?.pairs.length ?? session.pairCount;
          const unmatchedCount =
            details?.unmatchedCount ?? session.unmatchedCount;

          return (
            <Card
              key={session.id}
              className={`bg-white/95 backdrop-blur border-blue-200 transition-shadow ${
                isLatest
                  ? "border-2 border-indigo-500 shadow-xl"
                  : "shadow-sm"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <CardTitle className="flex items-center gap-2">
                        🎁 Session #{session.id}
                      </CardTitle>
                      <Badge
                        className={
                          session.mode === "OPTIMAL"
                            ? "bg-green-600 text-white"
                            : "bg-yellow-600 text-white"
                        }
                      >
                        {session.mode}
                      </Badge>

                      <Badge className="ml-auto">
                        {pairCount} {pairCount === 1 ? "pair" : "pairs"}
                      </Badge>

                      {isLatest && (
                        <Badge className="bg-indigo-600 text-white">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <CardDescription  className="mt-8">
                      Created:{" "}
                      {new Date(session.createdAt).toLocaleDateString()} by{" "}
                      {session.createdBy.firstName}{" "}
                      {session.createdBy.lastName}
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => handleToggleExpand(session.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white ml-2"
                  >
                    {isExpanded ? "▲ Hide" : "▼ Details"}
                  </Button>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="space-y-4 border-t pt-4">
                  {detailsLoadingId === session.id && !details && (
                    <div className="text-sm text-gray-600">
                      Loading details...
                    </div>
                  )}

                  {details && (
                    <>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Gift Pairings:
                        </h4>
                        <div className="space-y-2 max-h-80 overflow-y-auto">
                          {details.pairs.map((pair) => (
                            <div
                              key={pair.id}
                              className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                            >
                              <span className="font-medium text-gray-900">
                                {pair.giver}
                              </span>
                              <span className="text-gray-400 mx-3">→</span>
                              <span className="font-medium text-blue-600">
                                {pair.receiver}
                              </span>
                            </div>
                          ))}

                          {details.pairs.length === 0 && (
                            <p className="text-sm text-gray-600">
                              No pairs for this session.
                            </p>
                          )}
                        </div>
                      </div>

                      {unmatchedCount > 0 && (
                        <div className="p-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                          <p className="flex items-center gap-2 text-yellow-800 font-medium">
                            <span>⚠️</span>
                            {unmatchedCount} unmatched user
                            {unmatchedCount > 1 ? "s" : ""}:
                          </p>

                          {details.unmatchedUsers.length > 0 && (
                            <ul className="mt-1 text-sm text-yellow-900 list-disc list-inside">
                              {details.unmatchedUsers.map((u) => (
                                <li key={u.id}>{u.fullName}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })
      )}
    </div>
  );
}
