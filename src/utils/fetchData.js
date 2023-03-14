export const fetchData = async (endpoint) => {
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  return jsonResponse;
};
