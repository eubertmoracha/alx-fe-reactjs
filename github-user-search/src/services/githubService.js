// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch a single GitHub user's data by username
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

/**
 * Advanced search for multiple users
 * @param {string} username
 * @param {string} location
 * @param {number} minRepos
 * @returns {Promise<Array>}
 */
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};
