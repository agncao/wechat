package com.yitian.um.core.manager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.transaction.annotation.Transactional;
import com.yitian.um.core.dao.GroupDao;
import com.yitian.um.core.dao.UserDao;
import com.yitian.um.core.dao.UserGroupDao;
import com.yitian.um.core.model.form.GroupForm;
import com.yitian.um.core.model.query.GroupQuery;

/**
 * GroupManager
 */
@Component
//@Transactional
public class GroupManager {

	/**
	 * 查询所有职务
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getAll(final GroupQuery query) {
		log.info("查询所有");
		return groupDao.findAll(query);
	}

	/**
	 * 查询所有职务
	 */
	//@Transactional(readOnly = true)
	public final List<Map<String, Object>> getEnabled() {
		log.info("查询所有启用的职务");
		return groupDao.findEnabled();
	}

	/**
	 * 查询某个用户所有的职位
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getGroupsByUserWithPartTime(final long userId) {
		log.info("查询用户所有职位");
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		Map<String, Object> user = userDao.findById(userId);
		Map<String, Object> group = new HashMap<String, Object>();
		group.put("id", 0);
		group.put("type", 1);
		group.put("deptId", user.get("deptId"));
		group.put("groupId", user.get("groupId"));
		group.put("deptName", user.get("deptName"));
		group.put("groupName", user.get("groupName"));
		result.add(group);
		result.addAll(userGroupDao.getGroupsByUserOnlyPartTime(userId));
		return result;
	}

	/**
	 * 查询某个用户所有兼职的职位
	 */
	//@Transactional(readOnly = true)
	public List<Map<String, Object>> getGroupsByUserOnlyPartTime(final long userId) {
		return userGroupDao.getGroupsByUserOnlyPartTime(userId);
	}

	/**
	 * 添加职务
	 */
	public boolean addGroup(final GroupForm form) {
		groupDao.add(form);
		log.info("添加职务" + form.getNaming());
		return true;
	}

	/**
	 * 修改职务
	 */
	public boolean updateGroup(final GroupForm form) {
		groupDao.update(form);
		log.info("修改职务" + form.getNaming());
		return true;
	}

	/**
	 * 启用职务
	 */
	public boolean enable(final GroupForm form) {
		groupDao.enable(form);
		log.info("启用职务" + form.getNaming());
		return true;
	}

	/**
	 * 停用职务
	 */
	public boolean disable(final GroupForm form) {
		groupDao.disable(form);
		log.info("停用职务" + form.getNaming());
		return true;
	}

	/**
	 * 删除职务
	 */
	public boolean deleteGroup(final String ids) {
		groupDao.deleteAll(ids);
		log.info("删除职务" + ids);
		return true;
	}

	@Autowired
	private GroupDao groupDao;
	@Autowired
	private UserGroupDao userGroupDao;
	@Autowired
	private UserDao userDao;
	private final Logger log = LoggerFactory.getLogger(GroupManager.class);
}
