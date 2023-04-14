const API_KEY = "iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt";
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}`;

export async function fetchItems() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
}
