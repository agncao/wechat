package com.qq.weixin.qiye.util;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.qq.weixin.qiye.pojo.AccessToken;

/**
 * 微信企业号调用类 {"errcode":0,"errmsg":"ok"} 此结果表示调用方法成功返回
 * 
 * @author Sunlight
 * 
 */
public class QiYeUtil {
	/**
	 * 获取企业号AccessToken
	 * 
	 * @param CorpID
	 * @param CorpSecret
	 * @return
	 */
	public static AccessToken getAccessToken(String CorpID, String CorpSecret) {
		AccessToken accessToken = WechatAccessToken.getAccessToken(CorpID,
				CorpSecret, 1);
		return accessToken;
	}

	/**
	 * OAuth2验证接口根据code获取成员信息
	 * 
	 * @param token
	 * @param code
	 * @param AgentID
	 * @return
	 */
	public static Result<String> oAuth2GetUserByCode(String token, String code,
			int AgentID) {
		Result<String> result = new Result<String>();
		JSONObject jo = WechatOAuth2.getUserByCode(token, code, AgentID);
		if (jo != null) {
			try {
				String userId = jo.getString("UserId");
				if (userId != null && userId.length() > 0) {
					result.setErrmsg("");
					result.setErrcode("0");
					result.setObj(userId);
				} else {
					result.setErrmsg(jo.getString("errmsg"));
					result.setErrcode(jo.getString("errcode"));
				}

			} catch (Exception e) {
				result.setErrmsg("accessToken 超时......");
				result.setErrcode("42001");
			}
		}
		return result;
	}
	
	public static java.util.Map<String,String> requestServerParam(HttpServletRequest request){
		java.util.Map<String,String> reqMap = new java.util.HashMap<>();        
		if(request.getParameter("msg_signature")!=null)reqMap.put("msg_signature", request.getParameter("msg_signature"));          // 微信加密签名  
		if(request.getParameter("timestamp")!=null)reqMap.put("timestamp", request.getParameter("timestamp"));          // 时间戳  
		if(request.getParameter("nonce")!=null)reqMap.put("nonce", request.getParameter("nonce"));          // 随机数  
		if(request.getParameter("echostr")!=null)reqMap.put("echostr", request.getParameter("echostr"));		// 随机字符串
		return reqMap;
	}
}
