export const getstudentinfo = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentinfo",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("student_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const getstudentbooks = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentbooks",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("student_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const getstudentMiscellaneous = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentMiscellaneous",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("student_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};
export const getsAllbooks = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/listOfBooks",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("student_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};
export const getsAllSubjects = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/studentSubjects",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("student_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};
