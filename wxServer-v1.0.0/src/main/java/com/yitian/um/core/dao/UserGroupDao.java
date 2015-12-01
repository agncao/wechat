package com.yitian.um.core.dao;

import java.util.List;
import java.util.Map;
import com.yitian.um.core.model.form.UserGroupForm;

/**
 * UserGroupDao
 */
public interface UserGroupDao {
	/**
	 * 根据用户id查询拥有的用户组
	 */
	List<Map<String, Object>> findGroupsByUser(long userId);

	/**
	 * 新增
	 */
	int add(UserGroupForm nForm);

	/**
	 * 修改
	 */
	int update(UserGroupForm mForm);

	/**
	 * 删除多个
	 */
	int deleteAll(Map<String, Object> params);

	/**
	 * 查询某个用户所有的兼职职位
	 */
	List<Map<String, Object>> getGroupsByUserOnlyPartTime(long userId);

	/**
	 * 查询用户是否有对应的职务
	 */
	int checkUserHaveGroup(Map<String, Object> map);
}
