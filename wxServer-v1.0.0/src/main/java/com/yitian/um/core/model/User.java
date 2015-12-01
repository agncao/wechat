package com.yitian.um.core.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * User
 */
@Data
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id; // 用户表
	private String naming; // 用户名
	private String realname; // 真实姓名
	private String username; // 真实姓名
	private String userPass; // 密码
	private String password; // 密码
	private String idCardNum; // 身份证号
	private Integer gender; // 性别
	private java.util.Date birthday; // 出生日期
	private String cellphoneNumber; // 手机号
	private String telephoneNumber; // 电话号码
	private String email; // 邮箱
	private java.util.Date createTime = new Date(); // 创建时间
	private java.util.Date updateTime; // 最后修改时间
	private java.util.Date lastLoginTime; // 最后登录时间
	private java.util.Date lastLogoutTime; // 最后登出时间
	private Integer locked; // 是否锁定
	private Integer expired; // 是否禁用
	private Integer disabled; //
	private Integer state = 1; // 状态
	private Integer type ; // 
	private Long compId; // 公司Id
	private Long deptId; // 部门Id
	private Long groupId; // 组织Id
	private String idCard; // 身份证
	private String phone; // 家庭电话
	private String cellphone; // 电话
	private String qq; // 状态
	private String address; // 地址
	private String deptName; // 部门名称
	private String roleName; // 角色
}