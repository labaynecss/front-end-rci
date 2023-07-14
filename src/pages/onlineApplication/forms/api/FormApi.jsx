export const formApi = async (credentials) => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentreg.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error("Faild to Fetch Data");
  }
};
