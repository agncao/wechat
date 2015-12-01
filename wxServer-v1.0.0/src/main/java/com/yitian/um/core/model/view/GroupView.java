package com.yitian.um.core.model.view;

import java.io.Serializable;
import lombok.Data;

/**
 * 职务
 */
@Data
public class GroupView implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id; //
	private String naming; // 职位名称
	private String remarks; // 备注
	private Integer sorting; // 排序
	private Integer state; // 状态
	private Integer deptId; // 不同公司有不同职务
}