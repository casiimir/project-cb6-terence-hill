export const API_KEY = "iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt";
export const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&locale=it-it&size=20`;

export async function fetchItems() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  const events = data._embedded.events;
  return events;
}
