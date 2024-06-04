import React from "react";

export default function Card({ item }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img className="w-full" src={item.imageUrl} alt={item.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {item.location}
        </span>
        <a
          href={item.googleMapsUrl}
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
        <div className="text-gray-600 text-sm mt-2">
          {item.startDate} - {item.endDate}
        </div>
      </div>
    </div>
  );
}
