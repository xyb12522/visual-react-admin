const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
};

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "admin",
    avatar: "http://p4.music.126.net/tzpcaS7_b243MtdjrvYplA==/109951163870857317.jpg?param=80y80",
    description: "拥有系统内所有菜单和路由权限",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "编辑员",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"可以看到除户管理页面之外的所有页面",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "游客",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"仅能看到Dashboard、开发文档、权限测试和关于作者四个页面",
  },
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: "用户名或密码错误",
      };
    }
    return {
      status: 0,
      token,
    };
  },
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: "获取用户信息失败",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
  getUsers: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deleteUser: (config) => {
    const { id } = JSON.parse(config.body);
    const token = tokens[id];
    if (token) {
      delete tokens[id];
      delete users[token];
    }
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const token = tokens[id];
    if (token) {
      users[token] = { ...users[token], ...data };
    }
    return {
      status: 0,
    };
  },
  ValidatUserID: (config) => {
    const userID = config.body;
    const token = tokens[userID];
    if (token) {
      return {
        status: 1,
      };
    } else {
      return {
        status: 0
      };
    }
  },
  addUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    tokens[id] = `${id}-token`
    users[`${id}-token`] = {
      ...users["guest-token"],
      ...data
    }
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
