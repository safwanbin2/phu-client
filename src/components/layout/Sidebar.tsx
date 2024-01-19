import { Layout, Menu, MenuProps } from "antd";
import {
  adminSidebarItems,
  facultySidebarItems,
  studentSidebarItems,
} from "./SidebarItems";
import { USER_ROLES } from "./constants";

const { Sider } = Layout;

const userRole = USER_ROLES.ADMIN;
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

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
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