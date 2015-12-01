package com.yitian.um.core.model.query;

import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import com.yitian.common.bean.BaseQueryBean;

/**
 * 部门
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class DeptQuery extends BaseQueryBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; // 用户部门
	private String naming; // 部门名称
	private String remarks; // 部门描述
	private String address; // 地址
	private Integer sorting; // 排序
	private Integer type; // 是否公司 1是 2不是
	private Integer state; // 状态 1启用 2停用
	private long parentId; //
	private long userId; // 部门负责人
}