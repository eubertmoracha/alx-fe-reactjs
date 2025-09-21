import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/users";

/**
 * Fetch user data from GitHub API by username
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - User data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    // Throw error so the component can handle it (show message)
    throw new Error("User not found");
  }
};
