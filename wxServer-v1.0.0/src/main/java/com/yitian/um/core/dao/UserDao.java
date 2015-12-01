package com.yitian.um.core.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.yitian.um.core.model.User;
import com.yitian.um.core.model.form.UserForm;
import com.yitian.um.core.model.query.UserQuery;

/**
 * UserDao
 */
public interface UserDao {

	/**
	 * 底层平台配置 用户管理
	 */
	List<Map<String, Object>> getByPage(UserQuery query);

	/**
	 * 底层平台配置 用户管理Count
	 */
	long getCountPage(UserQuery query);

	/**
	 * 通过Username得到一个 User
	 */
	User findByUsername(final String username);
	/**
	 * 通过用户名和密码返回一个用户
	 */
	User loginUser(Map<String, Object> map);
	/**
	 * 校验用户名是否存在
	 */
	long usernameExist(String userName);

	/**
	 * 校验用户名是否被他人已使用
	 */
	long usernameUserdByOther(Map<String, Object> params);

	/**
	 * 查询全部用户数量
	 */
	long count(UserQuery query);

	/**
	 * 查询全部用户
	 */
	List<Map<String, Object>> findAll(UserQuery query);

	/**
	 * 通过用户id得到用户详细信息
	 */
	Map<String, Object> getUserDetailById(long id);

	/**
	 * 分页查询用户
	 */
	List<Map<String, Object>> findPage(UserQuery query);
	List<User> findByPage(final UserQuery query);
	/**
	 * 通过id得到一个用户
	 */
	Map<String, Object> findById(long id);

	/**
	 * 根据用户名得到id
	 */
	long getUserIdByName(@Param(value = "username") String username);

	/**
	 * 通过id得到一个用户的名称
	 */
	Map<String, Object> findNameById(long id);

	/**
	 * 通过用户名得到用户的id 及登录信息
	 */
	Map<String, Object> getLoginInfoByUsername(@Param(value = "username") String username);

	/**
	 * 用户登录
	 */
	Map<String, Object> login(Map<String, String> params);

	/**
	 * 新增用户
	 */
	int add(UserForm form);

	/**
	 * 修改用户信息
	 */
	int update(UserForm form);

	/**
	 * 启用
	 */
	int enable(UserForm form);

	/**
	 * 停用
	 */
	int disable(UserForm form);

	/**
	 * 删除多个用户
	 */
	int deleteAll(String ids);

	/**
	 * 删除一个用户
	 */
	int delete(long id);

	/**
	 * 查询原始密码
	 */
	String getOldPassword(long userId);

	/**
	 * 修改密码
	 */
	int updatePassword(UserForm form);

	/**
	 * 根据用户名获取邮箱，电话
	 */
	Map<String, String> getEmailAndPhone(String userName);

	/**
	 * 忘记密码更新随机密码
	 */
	int updateRanPwd(Map<String, Object> parm);

	/*************************** 查询 ***********************************************/
	/**
	 * 查询最近过生日的员工
	 */
	List<Map<String, Object>> getUsersByBirthday(Map<String, Object> parm);

	/*************************** 根据部门查询 ***********************************************/
	/**
	 * 查询指定部门下的用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDept(long deptId);

	/**
	 * 查询多个指定部门下的启用用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDepts(long[] deptIds);

	/**
	 * 查询多个指定部门下的全部用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsAll(UserQuery query);

	/**
	 * 查询多个指定部门下的全部用户(不包括兼职)count
	 */
	long getUsersByDeptsCount(UserQuery query);

	/**
	 * 查询指定部门下的用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByDeptOnlyPartTime(long deptId);

	/**
	 * 查询多个指定部门下的用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsOnlyPartTime(long[] deptIds);

	/*************************** 根据职务查询 ***********************************************/
	/**
	 * 根据职位名称查询用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByGroupName(String groupName);

	/**
	 * 根据职位名称查询用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByGroupNameOnlyPartTime(String groupName);

	/**
	 * 根据职位Id查询用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByGroupId(long groupId);

	/**
	 * 根据职位Id查询用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByGroupIdOnlyPartTime(long groupId);

	/*************************** 根据部门和职务查询 ***********************************************/
	/**
	 * 查询指定部门和职位名称下的用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDeptAndGroupName(Map<String, Object> parm);

	/**
	 * 查询指定部门和职位名称下的用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByDeptAndGroupNameOnlyPartTime(Map<String, Object> parm);

	/**
	 * 查询多个指定部门和职位名称下的用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsAndGroupName(Map<String, Object> parm);

	/**
	 * 查询多个指定部门和职位Id下的用户(不包括兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsAndGroupId(Map<String, Object> parm);

	/**
	 * 查询多个指定部门和职位名称下的用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsAndGroupNameOnlyPartTime(Map<String, Object> parm);

	/**
	 * 查询多个指定部门和职位Id下的用户(仅兼职)
	 */
	List<Map<String, Object>> getUsersByDeptsAndGroupIdOnlyPartTime(Map<String, Object> parm);

	/**
	 * 根据部门和多个职位名称查询用户
	 */
	List<Map<String, Object>> getUsersByDeptAndGroupNames(Map<String, Object> hm);

	/**
	 * 根据人的ID来找人
	 */
	List<Map<String, Object>> getUserById(long userId);

	/**
	 * 根据id获取用户信息
	 */
	User getUserInfoById(long userId);
	/**
	 * 根据Id查询用户手机号
	 */
	String getPhone(@Param(value = "userIds") String userIds);

	/**
	 * 根据用户ID获取用户信息
	 */
	List<Map<String, Object>> getUsersById(String[] userIds);

	/**
	 * 根据部门和职务获取启用人员列表
	 */
	List<Map<String, Object>> getAllEnableUserByDeptAndGroup(Map<String, Object> param);

	/**
	 * 根据用户ID获取用户姓名
	 */
	String findRealnameById(Long userId);
	/**
	 *getPageUser 
	 */
	List<User> getPageUser(UserQuery userQuery);
	List<User> getAll();
	/**
	 *getCount 
	 * 
	 */
	long getUserAllCount(UserQuery userQuery);
}
