package com.yitian.um.core.model.view;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户职务
 */
@Data
public class UserGroupView implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id; // 用户部门职位关联表
	private Integer groupId; //
	private Integer userId; //
	private Integer deptId; //
}