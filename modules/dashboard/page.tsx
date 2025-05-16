"use client";

import Image from "next/image";
import { Card } from "@/components/card";
import { useMemo, useState } from "react";

interface Mentor {
  id: number;
  name: string;
  occupation: string;
  biography: string;
  tags: string[];
  session_price: number;
  avatar: string;
}

interface DashboardProps {
  mentors: Mentor[];
}

export const Dashboard = ({ mentors }: DashboardProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [closingIds, setClosingIds] = useState<number[]>([]);

  const [removedIds, setRemovedIds] = useState<number[]>([]);

  const visibleMentors = mentors
    .filter((mentor) => !removedIds.includes(mentor.id))
    .slice(0, 3);

  const handleRemove = (id: number) => {
    setClosingIds((prev) => [...prev, id]);
    setTimeout(() => {
      setRemovedIds((prev) => [...prev, id]);
      setClosingIds((prev) => prev.filter((closingId) => closingId !== id));
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-white px-[3vw] py-[1vw]">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-semibold text-teal-600">MarketPlace</h1>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">User</span>
          <Image
            src="/images/profile.png" // replace with your actual profile image path
            alt="User Profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Mentors"
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
        />
      </div>

      {/* Recommended Section */}
      <h2 className="text-3xl font-semibold text-teal-600 mb-4">Recommended</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3vw]">
        {visibleMentors.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No more mentors to show.
          </p>
        ) : (
          visibleMentors.map((mentor) => (
            <Card
              key={mentor.id}
              id={mentor.id}
              name={mentor.name}
              occupation={mentor.occupation}
              biography={mentor.biography}
              tags={mentor.tags || []}
              session_price={mentor.session_price}
              avatar={mentor.avatar}
              onRemove={() => handleRemove(mentor.id)}
              isClosing={closingIds.includes(mentor.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
