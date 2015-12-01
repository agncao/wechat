package com.qq.weixin.qiye.pojo.app;

public class AccessSecret {
	/**
	 * 常量说明：
	 * 此处定义的常量需要持久化，可以保存在数据库中，在需要的地方读取。
	 * 在多企业号中，最好以每个应用来定义。
	 */

	private int agentId;
	private String token;
	public static final String CORPID = "wx7e6675a6dd5c2756";
	private String AppSecret;	//secret
	private String encodingAESKey;
	
	public int getAgentId(){
		return this.agentId;
	}

	public String getToken(){
		return this.token;
	}
	
	public String getAppSecret(){
		return this.AppSecret;
	}
	
	public String getEncodingAESKey(){
		return this.encodingAESKey;
	}
}
