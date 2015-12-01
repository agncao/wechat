package com.yitian.um.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yitian.um.core.dao.GroupManageDao;
import com.yitian.um.core.model.form.GroupForm;

@Service
public class GroupManageService {

	@Autowired
	private GroupManageDao groupDao;
	/**
	 *添加职务 
	 */
	public void addGroup(GroupForm form){
		groupDao.add(form);
	}
	/**
	 *修改职务 
	 */
	public void updateGroup(GroupForm form){
		groupDao.update(form);
	}
	/**
	 * 删除职务
	 */
	public void deleteGroup(long id){
		groupDao.delete(id);
	}
	/**
	 * 启用职务
	 */
	public void enable(long id){
		GroupForm groupForm = new GroupForm();
		groupForm.setForeignId(id);
		groupDao.enable(groupForm);
	}
	/**
	 * 停用职务
	 */
	public void disable(long id){
		GroupForm groupForm = new GroupForm();
		groupForm.setForeignId(id);
		groupDao.disable(groupForm);
	}
}
