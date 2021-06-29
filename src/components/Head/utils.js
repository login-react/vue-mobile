/*
 * @Description:
 * @Version: 2.0
 * @Author: mac_zhou
 * @Date: 2021-06-22 20:43:11
 * @LastEditors: mac_zhou
 * @LastEditTime: 2021-06-22 20:46:57
 */
/**
 *  根据角色获取不同的菜单 前端针对不同的角色分配不同的菜单
 * @param {*} treeData
 * @param {*} exitTree
 */

function roleMenu(treeData, exitTree) {
  const newResult = [];
  // 扁平化数组
  const flattenResult = flattenDeep(treeData);
  // 封装 fns
  exitTree.map(item => {
    const parent = flattenResult.find(v => v.key === splitValue(item));
    const _result = [parent].map(it => ({
      ...it,
      children: it.children.filter(v => v.key === item)
    }))[0];
    newResult.push(_result);
  });
  console.log("newResult :>>===========>>>>>>>>>>>>>> ", newResult);
}

/**
 *  treeData 所有menus菜单 扁平化菜 找寻父节点
 * @param {*} treeData
 */

function flattenDeep(treeData) {
  const detaillResult = [];
  treeData.map(item => renderTreeData(item));
  function renderTreeData(item) {
    detaillResult.push({ ...item });
    if (item.children && item.children.length > 0) {
      item.children.map(item => renderTreeData(item));
    }
  }
  return detaillResult;
}

/**
 * 截取字符
 * @param {*} str
 */
function splitValue(str) {
  return str.split("-")[0];
}

module.exports = {
  roleMenu
};
