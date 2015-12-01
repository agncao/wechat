package com.yitian.um.core.model.form;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 用户
 */
@Data
public class UserForm implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id; // 用户表
	private String username; // 用户名 general_ci 不区分大小写
	private String workNum; // 工号 ///////////////////////////////////
	private String idCard; // 身份证号
	private String password; // 密码
	private String oldPass; // 原密码
	private String realname; // 真实姓名
	private Integer gender; // 性别 1男 2女
	private java.util.Date birthday; // 出生年月
	private String phone; // 电话
	private String cellphone; // 手机
	private String qq; // qq
	private String email; // email general_ci不区分大小写
	private String address; // 地址
	private Date createTime; // 创建时间
	private Date lastLoginTime; // 最后登录时间
	private Date lastLogoutTime; // 最后登出时间
	private Date lastUpdateTime; // 最后修改时间
	private Date lastErrorTime; // 最后密码错误时间
	private Date lastLockTime; // 最后锁定时间
	private Date expiredTime; // 账号过期时间
	private String lastLoginIp; // 最后登录ip
	private Integer errorCount; // 密码错误次数
	private Integer locked; // 是否锁定
	private Integer expired; // 是否过期
	private Integer disabled; // 是否禁用
	private Integer state; // 状态

	private long compId; // 公司id
	private long deptId; // 部门id
	private long groupId; // 职务id

	// private Integer admin; // 是否超级用户
	// private Integer type; // 用户类型
	// private String code; // 用户编号
	// private String nation; // 民族
	// private String politicalstatus; // 政治面貌
	// private String marriage; // 婚姻状况
	// private String education; // 学历
	// private String specialty; // 专业
	// private String graduate; // 毕业学校
	// private Date employTime; // 入职时间
}