import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../../../components/buttons/OutlinedButton";
import SideInformation from "../../onlineApplication/forms/content/SideInformation";
import ModalInformation from "../components/modal/ModalInformation";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

const EnrollmentQueue = () => {
  useEffect(() => {
    document.title = "EnrollmentQueue";
  }, []);
  const [newData, setNewData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const navigate = useNavigate();

  const formApi = async (credentials) => {
    const response = await fetch(
      "https://richwellcolleges.edu.ph/api/studentinfo.php",
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

  const { mutate, data } = useMutation(formApi);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://richwellcolleges.edu.ph/api/queue1.php"
        );
        const jsonData = await response.json();
        setNewData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    console.log(selectedRowData);
    const eYear =
      selectedRowData.school_year.substring(2, 4) +
      selectedRowData.school_year.substring(7, 9);
    const eTerm = selectedRowData.term.substring(0, 1);
    const eID = "000001";
    const uniqueId = eYear + eTerm + eID;
    try {
      mutate({
        courseCode: selectedRowData.course_code,
        schoolYearCode: selectedRowData.school_year_code,
        enrollmentId: uniqueId,
        queueNo: selectedRowData.queue_no,
        course: selectedRowData.course,
        admitAS: selectedRowData.admit_type,
        yrLevel: selectedRowData.school_level,
        syTerm: eTerm,
        syYear: selectedRowData.school_year,
        firstName: selectedRowData.first_name,
        middleName: selectedRowData.middle_name,
        lastName: selectedRowData.last_name,
        suffixName: selectedRowData.extension_name,
        civilStatus: selectedRowData.civil_status,
        citizenship: selectedRowData.citizenship,
        placeOfBirth: selectedRowData.birth_place,
        religion: selectedRowData.religion,
        gender: selectedRowData.gender,

        currentHouseNo: selectedRowData.house_no,
        currentStreetName: selectedRowData.street_name,
        currentSubdivision: selectedRowData.subdivision,
        currentBarangay: selectedRowData.barangay,
        currentMunicipality: selectedRowData.municipality,
        currentProvince: selectedRowData.province,
        currentZipCode: selectedRowData.zip_code,

        permanent_house_no: selectedRowData.permanent_house_no,
        permanent_subdivision: selectedRowData.permanent_subdivision,
        permanent_street_name: selectedRowData.permanent_street_name,
        permanent_barangay: selectedRowData.permanent_barangay,
        permanent_municipality: selectedRowData.permanent_municipality,
        permanent_province: selectedRowData.permanent_province,
        permanent_zip_code: selectedRowData.permanent_zip_code,

        tel_no: selectedRowData.tel_no,
        contactNo: selectedRowData.contact_no,
        emailAddress: selectedRowData.email_address,

        motherFirstName: selectedRowData.mother_firstname,
        motherMiddleName: selectedRowData.mother_middlename,
        motherLastName: selectedRowData.mother_lastname,
        motherSuffix: selectedRowData.mother_suffix,
        motherOccupation: selectedRowData.mother_occupation,
        motherMobileNumber: selectedRowData.mother_contactno,
        motherEmail: selectedRowData.mother_email,

        fatherFirstName: selectedRowData.father_firstname,
        fatherMiddleName: selectedRowData.father_middlename,
        fatherSuffix: selectedRowData.father_suffix,
        fatherLastName: selectedRowData.father_lastname,
        fatherOccupation: selectedRowData.father_occupation,
        fatherEmail: selectedRowData.father_email,
        fatherMobileNumber: selectedRowData.father_contactno,

        guardianFirstName: selectedRowData.guardian_firstname,
        guardianMiddleName: selectedRowData.guardian_middlename,
        guardianSuffix: selectedRowData.guardian_suffix,
        guardianLastName: selectedRowData.guardian_lastname,
        guardianOccupation: selectedRowData.guardian_occupation,
        guardianEmail: selectedRowData.guardian_email,
        guardianMobileNumber: selectedRowData.guardian_contactno,
      });
      toast.success("Enrollment Successful!");
      setTimeout(() => {
        // Code to execute after the timeout
        handleCloseModal();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleRowClick = (index) => {
    setShow(true);
    setSelectedRow(index);
    const rowData = newData[index];
    setSelectedRowData(rowData);
    // console.log(rowData.first_name);
  };

  if (show) {
    return (
      <ModalInformation
        onClick={() => setShow(false)}
        selectedRowData={selectedRowData}
        Approve={handleSubmit}
      />
    );
  }
  return (
    <div className="">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <section className="py-1 bg-blueGray-50">
        <div className="w-full  mb-12 xl:mb-0 px-4 mx-auto ">
          <div className="relative flex flex-col break-words bluring overflow-x-auto max-h-[80vh] w-full mb-6 shadow-lg  rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 bg-reed-20">
                  <h3 className="font-semibold text-base text-blueGray-700 text-[20px]">
                    Student Information
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  {/* <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-[15px] font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button> */}
                </div>
              </div>
            </div>
            <div className="block w-full">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[black] py-3 text-[15px] uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Queue Number
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[black] py-3 text-[15px] uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[black] py-3 text-[15px] uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Course
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[black] py-3 text-[15px] uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Contact Number
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[black] py-3 text-[15px] uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newData.map((item, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[15px] whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {item.queue_no}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[15px] whitespace-nowrap p-4 ">
                        {item.first_name} {item.middle_name} {item.last_name}{" "}
                        {item.extension_name}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-[15px] whitespace-nowrap p-4">
                        {item.course}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[15px] whitespace-nowrap p-4">
                        <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                        {item.contact_no}
                      </td>
                      <td className="p-5">
                        <OutlinedButton
                          label="View"
                          color="secondary"
                          onClick={() => handleRowClick(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollmentQueue;
