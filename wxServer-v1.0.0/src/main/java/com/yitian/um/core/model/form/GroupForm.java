package com.yitian.um.core.model.form;

import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import lombok.Data;

/**
 * 职务
 */
@Data
public class GroupForm implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; //
	@NotEmpty(message = "职务名称不能为空!")
	private String naming; // 职位名称
	private String remarks; // 备注
	@NotNull(message = "排序不能为空!")
	private Integer sorting; // 排序
	private Integer state; // 状态\
	private long foreignId;
}