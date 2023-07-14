import { useQuery } from "@tanstack/react-query";
// const url = import.meta.env.VITE_REFRESHLOGIN_ENDPOINT;

const setJWT = async () => {
  const res = await fetch(
    "https://richwellcolleges.edu.ph/api/checkLogin.php",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );
  return res.json();
};

export const useQueryRefreshLogin = () =>
  useQuery({
    queryKey: ["jwt"],
    queryFn: setJWT,
    keepPreviousData: true,
    // enabled: enabled,
    staleTime: 1 * 1 * 1000, //1sec the amount of time for refetch
    cacheTime: 1000,
  });
