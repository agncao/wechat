package com.yitian.um.core.dao;

import java.util.List;
import java.util.Map;
import com.yitian.um.core.model.form.RoleForm;
import com.yitian.um.core.model.query.RoleQuery;

/**
 * RoleDao
 */
public interface RoleDao {

	/**
	 * 查询全部用户
	 */
	List<Map<String, Object>> findAll(RoleQuery query);

	/**
	 * 查询某个用户拥有的角色
	 */
	List<Map<String, Object>> findByUsername(String username);
	
	/**
	 * 查询角色拥有的人员
	 */
	List<Map<String, Object>> getUserByRoleId(Long roleId);

	/**
	 * 通过id得到一个用户
	 */
	Map<String, Object> findById(long id);

	/**
	 * 新增角色
	 */
	int add(RoleForm form);

	/**
	 * 修改角色
	 */
	int update(RoleForm form);

	/**
	 * 启用
	 */
	int enable(RoleForm form);

	/**
	 * 停用
	 */
	int disable(RoleForm form);

	/**
	 * 删除多个角色
	 */
	int deleteAll(String ids);

	/**
	 * 删除一个角色
	 */
	int delete(long id);

	/**
	 * 根据名称来查询id
	 */
	int findByNaming(String pm);

	/**
	 * 查询传过来的用户是否是项目经理
	 */
	int checkUserIsPm(Map<String, Object> map);

	/**
	 * 检验角色名是否存在
	 */
	long getNameYesOrNo(String roleName);

	/**
	 * 修改时检验角色名是否存在
	 */
	long getNameYesOrNoE(Map<String, Object> params);
}
