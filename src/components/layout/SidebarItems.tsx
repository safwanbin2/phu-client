import { NavLink } from "react-router-dom";

export const adminSidebarItems = [
  {
    key: "About",
    label: <NavLink to="/about">About</NavLink>,
  },
  {
    key: "Contact",
    label: <NavLink to="/contact">Contact</NavLink>,
  },
  {
    key: "dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
    ],
  },
  {
    key: "Academic Management",
    label: "Academic Management",
    children: [
      {
        key: "Academic Semesters",
        label: (
          <NavLink to="/admin/academic-semesters">Academic Semesters</NavLink>
        ),
      },
    ],
  },
];

export const facultySidebarItems = [
  {
    key: "About",
    label: <NavLink to="/about">About</NavLink>,
  },
  {
    key: "Contact",
    label: <NavLink to="/contact">Contact</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to="/faculty/dashboard">Dashboard</NavLink>,
  },
];

export const studentSidebarItems = [
  {
    key: "About",
    label: <NavLink to="/about">About</NavLink>,
  },
  {
    key: "Contact",
    label: <NavLink to="/contact">Contact</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to="/student/dashboard">Dashboard</NavLink>,
  },
];
