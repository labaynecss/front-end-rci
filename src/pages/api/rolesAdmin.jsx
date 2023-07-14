export const getroles = async () => {
  const response = await fetch("https://richwellcolleges.edu.ph/api/userCred", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const logout = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/logout.php",
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data;
};

export const admin = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/Dashboard",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const getcharts = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/WeeklyCollegeScholars",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};
export const linecharts = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/collegeEnrolledMonthly.php",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const piecharts = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/YearlyCollegeScholars",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const getallusers = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/EmployeeRoles",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};

export const getcredroles = async () => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/listRoles.php",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch server data");
  }
  return response.json();
};
export const getemployeebyid = async (id, page) => {
  try {
    const response = await fetch(
      `https://richwellcolleges.edu.ph/api/EmployeeRoles/?id=${id}page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error;
  }
};

export const postcredroles = async (credentials) => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/PostEmployeeRoles",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(credentials),
    }
  );

  return await response.json();
};

export const listsubject = async () => {
  try {
    const response = await fetch(
      `https://richwellcolleges.edu.ph/api/Subjects`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error;
  }
};

export const postlistofsubject = async (credentials) => {
  const response = await fetch(
    "https://richwellcolleges.edu.ph/api/PostSubject",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(credentials),
    }
  );

  return await response.json();
};
