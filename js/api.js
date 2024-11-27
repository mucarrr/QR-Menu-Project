export const fetchMenu = async () => {
  const response = await fetch("../db.json");
  const data = await response.json();
  return data;
}
