package com.yitian.um.core.model.view;

import java.io.Serializable;
import lombok.Data;

/**
 * 消息
 */
@Data
public class MessageView implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id; //
	private Integer type; // 1 私人消息 2公告
	private Integer sendType; // 1发送 2 抄送 3密送
	private Integer rank; // 等级
	private String msgTitle; // 消息标题
	private String msgContent; // 消息内容
	private Integer sender; // 发送者
	private Integer receiver; // 接受者
	private java.util.Date sendTime; // 发送时间
	private java.util.Date readTime; // 读取时间
	private Integer haveRead; // 是否已读 1已读 2未读
}