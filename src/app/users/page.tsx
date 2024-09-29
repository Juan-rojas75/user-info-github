"use client";
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/api-users.util"; // Necesitas crear esta función para obtener los detalles de la película
import Search from "../components/common/search";
import Card from "../components/common/card";
import Theme from "../components/common/theme";

export default function Users() {
  const [allUsers, setAllUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUser = async (user) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchUser(user);
      console.log(data);
      setAllUsers(data.items);
      console.log(allUsers);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onValue = (value) => {
    loadUser(value);
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-row sticky top-0 z-10 bg-white dark:bg-gray-800 shadow p-4">
        <div className="absolute">
        <Theme/>
        </div>
        <Search title="Búsqueda de usuario" onValue={onValue} />
      </div>
      <section>
        <div className="flex flex-row gap-5 flex-wrap justify-center p-10">
          {allUsers && allUsers.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}
