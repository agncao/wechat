package com.qq.weixin.qiye.pojo.contacts;

import java.io.Serializable;
import java.util.Date;

import com.qq.weixin.qiye.pojo.ResponseMessage;

import lombok.Data;

/**
 * User
 */
@Data
public class User extends ResponseMessage implements Serializable {
	private static final long serialVersionUID = 1L;
	private String name; // 真实姓名
	private String userid; // 真实姓名
	private java.util.List<Integer> department; // 成员所属部门Id列表
	private String position; // 职位信息
	private Integer gender; // 性别。0表示未定义，1表示男性，2表示女性
	private String mobile; // 手机号
	private String email; // 邮箱
	private String weixinid;	// 微信号
	private String avatar; // 头像url。注：如果要获取小图将url最后的"/0"改成"/64"即可
	private String status; // 关注状态: 1=已关注，2=已冻结，4=未关注
//	private String extattr; // 扩展属性{"attrs":[{"name":"爱好","value":"旅游"},{"name":"卡号","value":"1234567234"}]}
}