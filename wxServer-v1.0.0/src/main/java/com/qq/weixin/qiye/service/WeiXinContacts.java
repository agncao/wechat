package com.qq.weixin.qiye.service;

import com.alibaba.fastjson.*;
import com.qq.weixin.qiye.enums.EnumMethod;
import com.qq.weixin.qiye.pojo.AccessToken;
import com.qq.weixin.qiye.pojo.ResponseMessage;
import com.qq.weixin.qiye.pojo.app.AccessSecret;
import com.qq.weixin.qiye.pojo.contacts.*;
import com.qq.weixin.qiye.util.HttpRequestUtil;
import com.qq.weixin.qiye.util.QiYeUtil;

public class WeiXinContacts {

	/**
	 * 返回用户在微信的信息
	 * @param userWXid 微信账号Id
	 * @param accessSecret
	 * @return
	 */
	public User getUserById(final String userWXid, final AccessSecret accessSecret){
		AccessToken accessToken = QiYeUtil.getAccessToken(AccessSecret.CORPID, accessSecret.getAppSecret());
		String token = accessToken==null? "":accessToken.getToken();
		String url ="https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token="+token+"&userid="+userWXid;
		JSONObject jsonObject = HttpRequestUtil.httpRequest(url, EnumMethod.GET.name(), null);
		return JSONObject.toJavaObject(jsonObject, User.class);
	}
	
	/**
	 * 返回部门及其子部门
	 * @param deptWXid 微信部门Id
	 * @param accessSecret
	 * @return
	 */
	public java.util.Map<String,Object> getDeptsById(final int deptWXid,final AccessSecret accessSecret){
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		AccessToken accessToken = QiYeUtil.getAccessToken(AccessSecret.CORPID, accessSecret.getAppSecret());
		String token = accessToken==null? "":accessToken.getToken();
		String url ="https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token="+token+"&id="+deptWXid;
		JSONObject jsonObject = HttpRequestUtil.httpRequest(url, EnumMethod.GET.name(), null);
		JSONArray jsonarray = jsonObject.getJSONArray("department");
		Object obj = JSONArray.toJavaObject(jsonarray, Dept.class);  
		map.put("data", obj);
		obj = JSONObject.toJavaObject(jsonObject,ResponseMessage.class);
		map.put("msg", obj);
		return map;
	}
	
	/**
	 * 返回全部部门
	 * @param accessSecret
	 * @return
	 */
	public java.util.Map<String,Object> getDepts(final AccessSecret accessSecret){
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		AccessToken accessToken = QiYeUtil.getAccessToken(AccessSecret.CORPID, accessSecret.getAppSecret());
		String token = accessToken==null? "":accessToken.getToken();
		String url ="https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token="+token;
		JSONObject jsonObject = HttpRequestUtil.httpRequest(url, EnumMethod.GET.name(), null);
		JSONArray jsonarray = jsonObject.getJSONArray("department");
		Object obj = JSONArray.toJavaObject(jsonarray, Dept.class);  
		map.put("data", obj);
		obj = JSONObject.toJavaObject(jsonObject,ResponseMessage.class);
		map.put("msg", obj);
		return map;
	}

}
