/*
 * @Description:
 * @Version: 2.0
 * @Author: mac_zhou
 * @Date: 2021-06-22 20:43:47
 * @LastEditors: mac_zhou
 * @LastEditTime: 2021-06-22 20:49:50
 */

const arr = [
  {
    icon: "user",
    key: "1",
    name: "通讯录管理",
    path: "user",
    children: [
      {
        name: "通讯录配置",
        path: "user/configured",
        key: "1-1"
      },
      {
        name: "分组配置",
        path: "user/group",
        key: "1-2"
      }
    ]
  },
  {
    icon: "bars",
    key: "3",
    name: "Viewhub配置",
    path: "viewhub",
    children: [
      {
        name: "菜单配置",
        path: "viewhub/menu",
        key: "3-1"
      },
      {
        name: "用户权限",
        path: "viewhub/visiblerange",
        key: "3-2"
      },
      {
        name: "登录配置",
        path: "viewhub/login",
        key: "3-3"
      },
      {
        name: "显示配置",
        path: "viewhub/watermark",
        key: "3-4"
      }
    ]
  }
];
const { roleMenu } = require("./utils");
console.log(roleMenu(arr, ["1-1"]));
