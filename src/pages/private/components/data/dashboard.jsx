import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ClassIcon from "@mui/icons-material/Class";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubjectIcon from "@mui/icons-material/Subject";
import PaymentsIcon from "@mui/icons-material/Payments";
import MailIcon from "@mui/icons-material/Mail";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import BadgeIcon from "@mui/icons-material/Badge";
import React from "react";

// export const data = [
// {
// icon: <HomeIcon className="text-gray-200" />,
// title: "Home ",
// path: "/home",
// },
// {
// icon: <Diversity3Icon className="text-gray-200" />,
// title: "Enrollment List",
// path: "/student-enroll",
// },
// {
// icon: <PersonIcon className="text-gray-200" />,
// title: "Queue Enrollment",
// path: "/enrollment-queue",
// },
// {
// icon: <ClassIcon className="text-gray-200" />,
// title: "Classes",
// path: "/classes",
// },
// {
// icon: <EventNoteIcon className="text-gray-200" />,
// title: "Exams",
// path: "/exam",
// },
// {
// icon: <ShowChartIcon className="text-gray-200" />,
// title: "Reports",
// path: "/reports",
// },
// {
// icon: <PaymentsIcon className="text-gray-200" />,
// title: "Accounting",
// path: "/accounting",
// },
// {
// icon: <MailIcon className="text-gray-200" />,
// title: "Queue Enrollment",
// path: "/enrollment-queue",
// },
// ];

export const data2 = [
  {
    label: <h1 className="mb-2 text-left">Manage</h1>,
    icon: <HomeIcon fontSize="small" className="text-gray-200 " />,
    title: "Enrollment List",
    path: "/private/admin-registration/student-enroll",
  },
  {
    icon: <Diversity3Icon className="text-gray-200" />,
    title: "Queue Enrollment",
    path: "/private/admin-registration/enrollment-queue",
  },
  // {
  // icon: <PersonIcon className="text-gray-200" />,
  // title: 'Instructors',
  // path: '/instructor',
  // },
  // {
  // icon: <ClassIcon className="text-gray-200" />,
  // title: 'Classes',
  // path: '/classes',
  // },
  // {
  // icon: <EventNoteIcon fontSize="small" className="text-gray-200" />,
  // title: 'Exams',
  // path: '/exam',
  // },
  // {
  // icon: <ShowChartIcon fontSize="small" className="text-gray-200" />,
  // title: 'Reports',
  // path: '/reports',
  // },
  {
    icon: <SubjectIcon fontSize="small" className="text-gray-200" />,
    title: "List of Subjects",
    path: "/private/admin-registration/list-subject",
  },
  {
    icon: <MailIcon fontSize="small" className="text-gray-200" />,
    title: "Messages",
    path: "/message",
  },
];

export const charts = [
  {
    label: <h1 className="mb-2 text-left">Manage</h1>,
    icon: <HomeIcon fontSize="small" className="text-gray-200 " />,
    title: "Dashboard",
    path: "/private/admin-dashboard",
  },
  {
    icon: <BadgeIcon className="text-gray-200" />,
    title: "Employee",
    path: "/private/employees",
  },

  {
    label: <h1 className="mb-2">Charts</h1>,
    icon: <BarChartIcon fontSize="small" className="text-gray-200 " />,
    title: "Bar Chart ",
    path: "/private/bar-chart",
  },
  {
    icon: <TimelineIcon fontSize="small" className="text-gray-200" />,
    title: "Line Chart",
    path: "/private/line-chart",
  },
  {
    icon: <PieChartIcon fontSize="small" className="text-gray-200" />,
    title: "Pie Chart",
    path: "/private/pie-chart",
  },
];
