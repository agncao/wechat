package com.qq.weixin.qiye.pojo.send;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

/**
 * 响应消息之文本消息
 * @author sunlight
 *
 */
public class TextMessage extends BaseMessage {

	 /**
	  *  回复的消息内容  
	  */
    private String text;
    
    private java.util.Map<String, String> content = new java.util.HashMap<String, String>();
	 /**
	  *  回复的消息内容  
	  */
	private String getContent() {
		return content == null || content.get("content") == null ? "" :content.get("content");
	}

	
	public void setText(String content){
		this.content.put("content", content);
	}
	 /**
	  *  回复的消息内容  json格式
	  */
	public String getText(){
		return JSONObject.toJSONString(this.content);
	}
	
	@Override
	public String getMsgtype(){
		return "text";
	}
	
	@Override
	public String toString(){        
		StringBuffer sb = new StringBuffer();
		sb.append("{");
        sb.append("\"touser\":" + "\"" + this.getTouser() + "\",");
        sb.append("\"toparty\":" + "\"" + this.getToparty() + "\",");
        sb.append("\"totag\":" + "\"" + this.getTotag() + "\",");
        sb.append("\"msgtype\":" + "\"" + this.getMsgtype() + "\",");
        sb.append("\"agentid\":" + "\"" + this.getAgentid() + "\",");
        sb.append("\"text\":" + "{");
        sb.append("\"content\":" + "\"" + this.getContent() + "\"},");
        sb.append("\"safe\":" + "\"" + this.getSafe()+ "\"");
		sb.append("}");
		return sb.toString();
	}
    
}
