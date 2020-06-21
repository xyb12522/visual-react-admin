/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "功能管理",
    path: "/function",
    icon: "file-text",
    roles:["admin","editor","guest"]
  },
  {
    title: "学校简介管理",
    path: "/doc",
    icon: "file",
    roles:["admin","editor","guest"],
    children: [
      {
        title: "学校简介管理",
        path: "/components/richTextEditor",
        roles:["admin","editor"],
      },
      {
        title: "学校标签管理",
        path: "/components/Markdown",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "模块管理",
    path: "/guide",
    icon: "appstore",
    roles:["admin","editor"]
  },
  {
    title: "导览点位管理",
    path: "/guide1",
    icon: "yuque",
    roles:["admin","editor"]
  },
  {
    title: "导览路线管理",
    path: "/guide11",
    icon: "stock",
    roles:["admin","editor"]
  },
  {
    title: "热门地标管理",
    path: "/table",
    icon: "slack",
    roles:["admin","editor"]
  },
  {
    title: "招生政策管理",
    path: "/guide12",
    icon: "pic-center",
    roles:["admin","editor"]
  },
  {
    title: "全景漫游管理",
    path: "/guide13",
    icon: "import",
    roles:["admin","editor"]
  },
  {
    title: "产品设置",
    path: "/guide14",
    icon: "pie-chart",
    roles:["admin","editor"]
  },
  {
    title: "系统设置",
    path: "/components",
    icon: "setting",
    roles:["admin","editor"],
    children: [
      {
        title: "用户管理",
        path: "/user",
        roles:["admin","editor"],
      },
      {
        title: "角色管理",
        path: "/role",
        roles:["admin","editor"],
      },
      {
        title: "个人信息",
        path: "/person",
        roles:["admin","editor"],
      },
      {
        title: "系统日志",
        path: "/loge",
        roles:["admin","editor"],
      },
      {
        title: "留言记录",
        path: "/word",
        roles:["admin","editor"],
      },
      {
        title: "常见问题管理",
        path: "/bug",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "运维中心",
    path: "/charts",
    icon: "tool",
    roles:["admin","editor"],
    children: [
      {
        title: "学校管理",
        path: "/school",
        roles:["admin","editor"],
      },
      {
        title: "技术支持信息",
        path: "/about",
        roles:["admin","editor"],
      },
    ],
  },
];
export default menuList;
