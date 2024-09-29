'use client';
import axios from 'axios';

const urlApi_ = "https://api.github.com/search/users?q=";

export async function fetchUser(user = "") {
  const cacheKey = `github_user_${user}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(`${urlApi_}${user}`);
    const data = response.data;

    localStorage.setItem(cacheKey, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
