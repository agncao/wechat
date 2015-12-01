package com.yitian.um.core.manager;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.common.base.Splitter;
import com.yitian.common.util.io.JsonUtil;
import com.yitian.common.util.lang.DateUtil;
import com.yitian.common.util.lang.StringUtil;
import com.yitian.um.core.dao.*;
import com.yitian.um.core.model.form.UserForm;
import com.yitian.um.core.model.form.UserGroupForm;
import com.yitian.um.core.model.query.UserQuery;
//import org.springframework.transaction.annotation.Transactional;

/**
 * UserManager
 */
@Component
//@Transactional
public class UserManager {

	/**
	 * 查询所有用户记录数
	 */
	//@Transactional(readOnly = true)
	public long countUser(final UserQuery query) {
		return userDao.count(query);
	}
	
	/**
	 * 查询某个用户拥有的角色
	 * @param username
	 * @return
	 */
	public List<Map<String, Object>> findByUsername(String username){
		return roleDao.findByUsername(username);
	}

	/**
	 * 查询所有用户信息
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getByPageUser(final UserQuery query) {
		log.info("查询所有用户信息");
		return userDao.findPage(query);
	}

	/**
	 * 得到用户的详细信息
	 */
	//@Transactional(readOnly = true)
	public Map<String, Object> getUserDetailById(final long usrId) {
		return userDao.getUserDetailById(usrId);
	}

	/**
	 * 通过用户名得到用户的id 及登录信息
	 */
	//@Transactional(readOnly = true)
	public Map<String, Object> getLoginInfoByUsername(final String username) {
		return userDao.getLoginInfoByUsername(username);
	}



	/**
	 * 校验用户名是否存在
	 */
	//@Transactional(readOnly = true)
	public long usernameExist(final String userName) {
		return userDao.usernameExist(userName);
	}

	/**
	 * 校验用户名是否被他人已使用
	 */
	//@Transactional(readOnly = true)
	public long usernameUserdByOther(final String userName, final long id) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", id);
		params.put("userName", userName);
		return userDao.usernameUserdByOther(params);
	}

	/**
	 * 修改用户信息
	 */
	public boolean updateUser(final UserForm form) {
		userDao.update(form);
		return true;
	}

	/**
	 * 启用
	 */
	public boolean enable(final UserForm form) {
		userDao.enable(form);
		return true;
	}

	/**
	 * 停用
	 */
	public boolean disable(final UserForm form) {
		userDao.disable(form);
		return true;
	}

	/**
	 * 删除用户
	 */
	public boolean deleteUser(final String ids) {
		userDao.deleteAll(ids);
		return true;
	}

	/**
	 * 查询原始密码
	 */
	//@Transactional(readOnly = true)
	public String getOldPassword(final long userId) {
		return userDao.getOldPassword(userId);
	}

	/**
	 * 修改密码
	 */
	public boolean updatePassword(final UserForm form) {
		log.info("修改用户密码" + form.getId());
		userDao.updatePassword(form);
		return true;
	}


	/**
	 * 查询某个用户所有的角色剩下的可用角色
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getRolesByUserLeft(final long userId) {
		log.info("查询某个用户拥有的角色剩下的可用角色");
		return userRoleDao.getRolesByUserLeft(userId);
	}

	/**
	 * 查询某个用户所有的角色Map
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getRolesByUser(final long userId) {
		log.info("查询所有启用角色");
		return userRoleDao.getRolesByUser(userId);
	}

	/**
	 * 更新某个用户下的角色
	 */
	public boolean updateRolesByUser(final long userIdPar, final String ids) {
		log.info("更新某个用户下的角色");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userIdPar", userIdPar);
		params.put("ids", ids);
		userRoleDao.updateRolesByUser(params);
		return true;

		/*
		 * log.info("更新某个用户下的角色"); userRoleDao.deleteUserRolesByUser(userId); if (ids == null) { return true; } else { Iterable<String> split = Splitter.on(",").split(ids); Iterator<String> it = split.iterator(); while (it.hasNext()) { Map<String, Object> params = new HashMap<String, Object>();
		 * params.put("userId", userId); params.put("roleId", Integer.valueOf(it.next())); userRoleDao.addUserRole(params); } return true; }
		 */

	}

	/*************************** 查询 ***********************************************/
	/**
	 * 查询最近过生日的员工
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByBirthday(final UserQuery query, final int days) {
		Map<String, Object> parm = new HashMap<String, Object>();
		parm.put("today", DateUtil.dateToString(new Date(), "MM-dd"));
		parm.put("day", DateUtil.dateToString(DateUtil.add(new Date(), 0, 0, days), "MM-dd"));
		return userDao.getUsersByBirthday(parm);
	}

	/*************************** 根据部门查询 ***********************************************/
	/**
	 * 查询指定部门下的用户(不包括子部门 不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDept(final long deptId) {
		return userDao.getUsersByDept(deptId);
	}

	/**
	 * 查询指定部门下的用户(不包括子部门 包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptWithPartTime(final long deptId) {
		List<Map<String, Object>> result = userDao.getUsersByDept(deptId);
		result.addAll(userDao.getUsersByDeptOnlyPartTime(deptId));
		return result;
	}

	/**
	 * 查询多个指定部门下的启用用户(不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDepts(final long[] deptIds) {
		return userDao.getUsersByDepts(deptIds);
	}

	/**
	 * 查询多个指定部门下的全部用户(不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUserByDeptsAll(final UserQuery query) {
		return userDao.getUsersByDeptsAll(query);
	}

	/**
	 * 查询多个指定部门下的用户(不包括兼职)count
	 */
	//@Transactional(readOnly = true)
	public long getUserByDeptsCount(final UserQuery query) {
		return userDao.getUsersByDeptsCount(query);
	}

	/**
	 * 查询多个指定部门下的用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptsWithPartTime(final long[] deptIds) {
		List<Map<String, Object>> result = userDao.getUsersByDepts(deptIds);
		result.addAll(userDao.getUsersByDeptsOnlyPartTime(deptIds));
		return result;
	}



	/*************************** 根据职务查询 ***********************************************/
	/**
	 * 根据职位名称查询用户(不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupName(final String groupName) {
		return userDao.getUsersByGroupName(groupName);
	}

	/**
	 * 根据职位名称查询用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupNameWithPartTime(final String groupName) {
		List<Map<String, Object>> result = userDao.getUsersByGroupName(groupName);
		result.addAll(userDao.getUsersByGroupNameOnlyPartTime(groupName));
		return result;
	}

	/**
	 * 根据职位名称查询用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupNameWithPartTimeZZ(final String groupName) {
		List<Map<String, Object>> result = userDao.getUsersByGroupName(groupName);
		result.addAll(userDao.getUsersByGroupNameOnlyPartTime(groupName));
		return result;
	}

	/**
	 * 根据职位名称查询用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupNameWithPartTimeZL(final String groupName) {
		List<Map<String, Object>> result = userDao.getUsersByGroupName(groupName);
		result.addAll(userDao.getUsersByGroupNameOnlyPartTime(groupName));
		return result;
	}

	/**
	 * 根据职位id查询用户(不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupId(final long groupId) {
		return userDao.getUsersByGroupId(groupId);
	}

	/**
	 * 根据职位id查询用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByGroupIdWithPartTime(final long groupId) {
		List<Map<String, Object>> result = userDao.getUsersByGroupId(groupId);
		result.addAll(userDao.getUsersByGroupIdOnlyPartTime(groupId));
		return result;
	}

	/*************************** 根据部门和职务查询 ***********************************************/
	/**
	 * 查询指定部门和职位名称下的用户(不包括子部门 不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptAndGroupName(final long deptId, final String groupName) {
		Map<String, Object> parms = new HashMap<String, Object>();
		parms.put("deptId", deptId);
		parms.put("groupName", groupName);
		return userDao.getUsersByDeptAndGroupName(parms);
	}

	/**
	 * 查询指定部门和职位名称下的用户(不包括子部门 包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptAndGroupNameWithPartTime(final long deptId, final String groupName) {
		Map<String, Object> parms = new HashMap<String, Object>();
		parms.put("deptId", deptId);
		parms.put("groupName", groupName);
		List<Map<String, Object>> result = userDao.getUsersByDeptAndGroupName(parms);
		result.addAll(userDao.getUsersByDeptAndGroupNameOnlyPartTime(parms));
		return result;
	}

	/**
	 * 查询多个指定部门和职位名称下的用户(不包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptsAndGroupName(final long[] deptIds, final String groupName) {
		Map<String, Object> parms = new HashMap<String, Object>();
		parms.put("deptIds", deptIds);
		parms.put("groupName", groupName);
		return userDao.getUsersByDeptsAndGroupName(parms);
	}

	/**
	 * 查询多个指定部门和职位名称下的用户(包括兼职)
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptsAndGroupNameWithPartTime(final long[] deptIds, final String groupName) {
		Map<String, Object> parms = new HashMap<String, Object>();
		parms.put("deptIds", deptIds);
		parms.put("groupName", groupName);
		List<Map<String, Object>> result = userDao.getUsersByDeptsAndGroupName(parms);
		result.addAll(userDao.getUsersByDeptsAndGroupNameOnlyPartTime(parms));
		return result;
	}


	/**
	 * 查询指定部门和多个职位名称下的用户
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getUsersByDeptAndGroupNames(final String deptId, final String[] groupName) {
		Map<String, Object> hm = null;
		if (groupName != null && groupName.length > 0) {
			hm = new HashMap<String, Object>();
			hm.put("deptId", deptId);
			hm.put("groupNames", groupName);
			return userDao.getUsersByDeptAndGroupNames(hm);
		} else {
			return new ArrayList<Map<String, Object>>();
		}
	}

	/**
	 * 更新某个用户下的职务
	 */
	public boolean updateGroupByUser(final UserGroupForm form) {
		long userId = form.getUserId();
		List<UserGroupForm> mList = null;
		List<UserGroupForm> nList = null;
		// 修改的
		mList = JsonUtil.json2List(form.getMdifiedObjs(), UserGroupForm.class);
		// 新增的
		nList = JsonUtil.json2List(form.getNewObjs(), UserGroupForm.class);
		// 遍历 新增
		for (UserGroupForm nForm : nList) {
			nForm.setUserId(userId);
			userGroupDao.add(nForm);
		}
		// 遍历修改
		for (UserGroupForm mForm : mList) {
			mForm.setUserId(userId);
			userGroupDao.update(mForm);
		}
		String removedIds = form.getRomovedIds();
		// 删除的
		if (!StringUtil.isNullOrBlank(removedIds)) {
			Iterable<String> split = Splitter.on(",").split(removedIds);
			Iterator<String> it = split.iterator();
			while (it.hasNext()) {
				Map<String, Object> params = new HashMap<String, Object>();
				params.put("removedIds", Long.valueOf(it.next()));
				userGroupDao.deleteAll(params);
			}
		}
		return true;
	}

	/**
	 * 删除职务前检查职务下是否存在人员
	 */
	public long beforeDeleteConfirm(final Long id) {
		return getUsersByGroupIdWithPartTime(id).size();
	}

	@Autowired
	private UserDao userDao;
	@Autowired
	private UserGroupDao userGroupDao;
	@Autowired
	private UserRoleDao userRoleDao;
	@Autowired
	private RoleDao roleDao;
	private final Logger log = LoggerFactory.getLogger(UserManager.class);

}
