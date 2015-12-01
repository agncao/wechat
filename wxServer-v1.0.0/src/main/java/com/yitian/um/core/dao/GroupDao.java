package com.yitian.um.core.dao;

import java.util.List;
import java.util.Map;
import com.yitian.um.core.model.form.GroupForm;
import com.yitian.um.core.model.query.GroupQuery;

/**
 * GroupDao
 */
public interface GroupDao {

	/**
	 * 查询全部职务
	 */
	List<Map<String, Object>> findAll(GroupQuery query);

	/**
	 * 查询全部启用的职务
	 */
	List<Map<String, Object>> findEnabled();

	/**
	 * 通过id查询职务
	 */
	Map<String, Object> findById(long id);

	/**
	 * 新增职务
	 */
	int add(GroupForm form);

	/**
	 * 修改职务
	 */
	int update(GroupForm form);

	/**
	 * 启用
	 */
	int enable(GroupForm form);

	/**
	 * 停用
	 */
	int disable(GroupForm form);

	/**
	 * 删除多个职务
	 */
	int deleteAll(String ids);

	/**
	 * 删除一个职务
	 */
	int delete(long id);

	/**
	 * 根据名称查询职务Id
	 */
	int findIdByNaming(String pm);

	/**
	 * 查询职务
	 */
	GroupForm findByNaming(String groupStr);

	/**
	 * 检验职务名是否存在
	 */
	long groupNameExist(String deptName);

	/**
	 * 修改时检验职务名是否存在
	 */
	long groupNameExistE(Map<String, Object> params);

}
