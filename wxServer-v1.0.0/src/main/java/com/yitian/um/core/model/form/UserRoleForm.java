package com.yitian.um.core.model.form;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户角色关联
 */
@Data
public class UserRoleForm implements Serializable {
	private static final long serialVersionUID = 1L;
	private long id; // id
	private long userId; // 用户id
	private long roleId; // 角色id
}
