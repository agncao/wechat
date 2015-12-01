package com.yitian.um.core.model;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户职务
 */
@Data
public class UserGroup implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; // 用户部门职位关联表
	private long groupId; //
	private long userId; //
	private long deptId; //
}