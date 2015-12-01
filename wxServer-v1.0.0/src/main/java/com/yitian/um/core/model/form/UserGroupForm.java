package com.yitian.um.core.model.form;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户职务
 */
@Data
public class UserGroupForm implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; // 用户部门职位关联表
	private long groupId; //
	private String groupName; //
	private long userId; //
	private long deptId; //
	private String deptName; //
	private String romovedIds;
	private String mdifiedObjs;
	private String newObjs;
}