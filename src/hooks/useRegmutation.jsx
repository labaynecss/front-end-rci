import { useMutation } from "@tanstack/react-query";

// const queryClient = useQueryClient();

const registerUser = async (dataObj) => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentreg.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    }
  );
  return await response.json();
};

//OnSuccess, OnError, onSettled

export const useRegMutation = () => useMutation(registerUser);
