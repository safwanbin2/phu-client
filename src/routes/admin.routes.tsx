import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
];
