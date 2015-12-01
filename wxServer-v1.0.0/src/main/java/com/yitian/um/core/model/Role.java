package com.yitian.um.core.model;

import java.io.Serializable;
import lombok.Data;

/**
 * 角色
 */
@Data
public class Role implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	private String naming; // 角色名字
	private String remarks; // 角色描述
	private Integer sorting; // 排序
	private Integer state; // 状态 1启用 2停用
	private long parentId; //
}