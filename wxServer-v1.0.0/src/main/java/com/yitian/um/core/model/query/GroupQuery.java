package com.yitian.um.core.model.query;

import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import com.yitian.common.bean.BaseQueryBean;

/**
 * 职务
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class GroupQuery extends BaseQueryBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	private String naming; // 职位名称
	private String remarks; // 备注
	private Integer sorting; // 排序
	private Integer state; // 状态
}