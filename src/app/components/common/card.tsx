import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ user }) {
  return (
    <div className="mb-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4 p-4">
        <Image
          src={user.avatar_url}
          alt={user.login}
          height={100}
          width={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-1 justify-center items-start">
          <span className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">{user.name || user.login}</span>
          <p className="text-gray-600 dark:text-gray-400">ID: {user.id || "No ID available."}</p>
          <span className="bg-slate-200 p-1 rounded-xl dark:bg-gray-700">{user.type}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <button className="py-1 rounded-md border-2 border-gray-100 transition-transform transform hover:scale-105 dark:border-gray-600">
          <Link
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between items-center gap-1 text-gray-900 dark:text-white"
          >
            <span className="material-symbols-outlined">person</span>
            Profile
            <span className="material-symbols-outlined">open_in_new</span>
          </Link>
        </button>
        <button className="px-2 py-1 rounded-md border-2 border-gray-100 transition-transform transform hover:scale-105 dark:border-gray-600">
          <Link
            href={user.repos_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between items-center gap-1 text-gray-900 dark:text-white"
          >
            <span className="material-symbols-outlined">code</span>
            Repositories
            <span className="material-symbols-outlined">open_in_new</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
