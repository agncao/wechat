package com.qq.weixin.qiye.service;



import com.qq.weixin.qiye.enums.EnumMethod;
import com.qq.weixin.qiye.pojo.app.AccessSecret;
import com.qq.weixin.qiye.util.HttpRequestUtil;
import com.qq.weixin.qiye.util.QiYeUtil;
 


/**
 * @author flyman 2015-8-7
 */
 
public class SendWeChatMessage {
 
    // 发送消息分组所有成员
    // private final static String TOPARTY = "@all";

    // 获取访问权限码URL
    private final static String ACCESS_TOKEN_URL = "https://qyapi.weixin.qq.com/cgi-bin/gettoken";
    // 创建会话请求URL
    private final static String CREATE_SESSION_URL = "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=";

    public void sendWeChatMsg(final com.qq.weixin.qiye.pojo.send.TextMessage message,final AccessSecret accessSecret){
        String ACCESS_TOKEN = QiYeUtil.getAccessToken(AccessSecret.CORPID, accessSecret.getAppSecret()).getToken();
        String url = CREATE_SESSION_URL + ACCESS_TOKEN;
    	HttpRequestUtil.httpRequest(url, EnumMethod.POST.name(), message.toString());
    }
}