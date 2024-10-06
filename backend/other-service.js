// Example of middleware for logging requests
function requestLogger(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Don't forget to call next() to pass control to the next middleware
}

// Example of an async service function that interacts with a database or API
async function fetchServerData(serverId) {
  // Example of asynchronous operation (e.g., database query or API call)
  try {
    const serverData = await someDatabaseOrApiCall(serverId);
    return serverData;
  } catch (error) {
    console.error(`Error fetching data for server ${serverId}:`, error);
    throw error;  // Rethrow the error to handle it in the route handler
  }
}

module.exports = {
  requestLogger,
  fetchServerData
};
