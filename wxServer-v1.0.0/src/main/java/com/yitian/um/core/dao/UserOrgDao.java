package com.yitian.um.core.dao;

import java.util.List;
import com.yitian.um.core.model.User;
import com.yitian.um.core.model.query.UserQuery;

/**
 * UserOrgDao
 */
public interface UserOrgDao {

	/**
	 * 通过部门id获得该部门下的用户
	 */
	List<User> findUsersPageByOrg(final UserQuery query);
}
