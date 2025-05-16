import Image from "next/image";
import React from "react";

interface CardProps {
  id: number;
  name: string;
  occupation: string;
  biography: string;
  tags: string[];
  session_price: number;
  avatar: string;
  onRemove: (id: number) => void;
  isClosing?: boolean;
}

const Card = (mentor: CardProps) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-8 flex flex-col h-full relative ${
        mentor.isClosing ? "animate-fade-out" : ""
      }`}
    >
      <button
        onClick={() => mentor.onRemove(mentor.id)} // replace with actual logic
        className="flex justify-end text-gray-400 hover:text-red-500 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col items-center text-center mb-6 ">
        <img
          src={mentor.avatar}
          alt="Mentor"
          width={150}
          height={150}
          className="w-[180px] h-[180px] object-cover rounded-full mb-4"
        />
        <h3 className="font-semibold text-3xl">{mentor.name}</h3>
        <p className="text-xs text-gray-400 mt-2">{mentor.occupation}</p>
      </div>
      <div className="flex flex-col justify-start mb-6 pb-8">
        <p className="text-xs text-gray-600 mt-6">{mentor.biography}</p>
      </div>

      {/* Bottom container that sticks to bottom */}
      <div className=" mt-auto">
        {mentor.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4 justify-start">
            <span className="text-xs bg-gray-200 px-2 py-1 rounded text-blue-500">
              #Designing
            </span>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded text-blue-500">
              #Mentorship
            </span>
          </div>
        )}
        <div className="flex items-right justify-end">
          <p className="text-4xl font-bold text-teal-600">
            ${mentor.session_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
