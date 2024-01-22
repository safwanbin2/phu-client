import { Layout, Menu, MenuProps } from "antd";
import {
  adminSidebarItems,
  facultySidebarItems,
  studentSidebarItems,
} from "./SidebarItems";
import { USER_ROLES } from "./constants";
import { useAppSelector } from "../../redux/hooks";
import { TUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const Sidebar = () => {
  const { role } = useAppSelector((state) => state.auth.user) as TUser;
  // const userRole = USER_ROLES.ADMIN;
  const userRole = role;

  let sidebarItems;

  switch (userRole) {
    case USER_ROLES.ADMIN:
      sidebarItems = adminSidebarItems;
      break;

    case USER_ROLES.FACULTY:
      sidebarItems = facultySidebarItems;
      break;

    case USER_ROLES.STUDENT:
      sidebarItems = studentSidebarItems;
      break;

    default:
      break;
  }

  const items: MenuProps["items"] = sidebarItems;

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div style={{ color: "white" }}>
        <h2>PHU</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
