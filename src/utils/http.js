// const BASE_URL =

const GET = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
};
