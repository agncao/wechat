package com.yitian.um.core.model.query;

import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import com.yitian.common.bean.BaseQueryBean;

/**
 * 用户职务
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class UserGroupQuery extends BaseQueryBean implements Serializable {
	private static final long serialVersionUID = 1L;
	private long id; // 用户部门职位关联表
	private long groupId; //
	private long userId; //
	private long deptId; //
}