package com.yitian.um.core.dao;

import java.util.List;
import java.util.Map;

/**
 * UserRoleDao
 */
public interface UserRoleDao {
	/**
	 * 根据用户id查询拥有的角色
	 */
	List<Map<String, Object>> findRolesByUser(long userId);

	/**
	 * 查询某个用户拥有的角色剩下的可用角色
	 */
	List<Map<String, Object>> getRolesByUserLeft(long userId);

	/**
	 * 查询用户拥有的启用角色
	 */
	List<Map<String, Object>> getRolesByUser(long userId);

	/**
	 * 删除某个用户下的所有角色
	 */
	int deleteUserRolesByUser(long userId);

	/**
	 * 添加某个用户下的角色
	 */
	int addUserRole(Map<String, Object> params);

	/**
	 * 更新某个用户下的角色
	 */
	int updateRolesByUser(Map<String, Object> params);

	/**
	 * 删除某个角色的所有用户
	 */
	void deleteUserRolesByRoleId(Long roleId);
	/**
	 * 获取某个角色下的人员数量 
	 */
	int getUserLenByRole(long roleId);
}
