export const API_URL = "https://api.mentorplace.com/api/v2";
export const TRUSTED_KEY =
  "GJTVXUCMO7Tuswpc7lCo3M3f6KQq416jjrCbcaPrUIjmbCh39dofIT7HGHIYLjzN";

export const fetchMentors = async () => {
  const res = await fetch(
    `${API_URL}/mentors?charity=1,2,3,4&limit=29&offset=0&category=10`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TRUSTED_KEY}`,
      },
      cache: "no-store",
    }
  );

  console.log(
    `${API_URL}/mentors?charity=1,2,3,4&limit=29&offset=0&category=10`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
};

export default fetchMentors;
