package com.yitian.um.core.model.form;

import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import lombok.Data;

/**
 * 角色
 */
@Data
public class RoleForm implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	@NotEmpty(message = "角色名字不能为空!")
	private String naming; // 角色名字
	private String remarks; // 角色描述
	@NotNull(message = "排序不能为空!")
	private Integer sorting; // 排序
	private Integer state; // 状态 1启用 2停用
	private long parentId; //
}