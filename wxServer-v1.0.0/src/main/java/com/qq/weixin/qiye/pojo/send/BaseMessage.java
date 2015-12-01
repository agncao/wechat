package com.qq.weixin.qiye.pojo.send;

/**
 * 响应消息的基类
 * 
 * @author sunlight
 *
 */
public class BaseMessage {
	/**
	 * 接收方帐号（收到的OpenID）
	 */
	private String touser;
	/**
	 * 接收方部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为@all时忽略本参数
	 */
	private String toparty;

	/**
	 * 标签ID列表，多个接收者用‘|’分隔。当touser为@all时忽略本参数
	 */
	private String totag;

	/**
	 * 消息类型（text/music/news）
	 */
	private String msgtype;
	/**
	 * 企业应用的id，整型。可在应用的设置页面查看
	 */
	private int agentid;
	/**
	 * 表示是否是保密消息，0表示否，1表示是，默认0
	 */
	private int safe=0;

	public String getTouser() {
		return touser;
	}

	public void setTouser(String touser) {
		this.touser = touser;
	}

	public String getToparty() {
		return toparty;
	}

	public void seToparty(String toparty) {
		this.toparty = toparty;
	}

	public String getTotag() {
		return toparty;
	}

	public void setTotag(String totag) {
		this.totag = totag;
	}
	
	public String getMsgtype() {
		return msgtype;
	}

	public int getAgentid() {
		return agentid;
	}

	public void setAgentid(int agentid) {
		this.agentid = agentid;
	}

	public int getSafe() {
		return safe;
	}

	public void setSafe(int safe) {
		this.safe = safe;
	}
}
