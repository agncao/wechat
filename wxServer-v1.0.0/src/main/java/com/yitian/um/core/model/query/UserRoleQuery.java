package com.yitian.um.core.model.query;

import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import com.yitian.common.bean.BaseQueryBean;

/**
 * 用户角色
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserRoleQuery extends BaseQueryBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	private long roleId; // 角色id
	private long userId; // 用户id
}