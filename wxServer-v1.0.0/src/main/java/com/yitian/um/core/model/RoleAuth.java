package com.yitian.um.core.model;

import java.io.Serializable;
import lombok.Data;

/**
 * 权限角色
 */
@Data
public class RoleAuth implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	private long roleId; //
	private long authId; //
}