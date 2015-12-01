package com.yitian.um.modules.wx.todo.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qq.weixin.mp.aes.AesException;
import com.qq.weixin.mp.aes.WXBizMsgCrypt;
import com.qq.weixin.qiye.pojo.app.*;
import com.qq.weixin.qiye.service.SendWeChatMessage;
import com.qq.weixin.qiye.util.CoreService;
import com.qq.weixin.qiye.util.MessageUtil;
import com.qq.weixin.qiye.util.QiYeUtil;

/**
 * restful web service
 */
@Controller
public class ToDoController {
	private final Logger log = LogManager.getLogger(ToDoController.class);
	ApproveAccessSecret accessSecret = new ApproveAccessSecret();
	
	@RequestMapping(value = { "wx/todo/listByPage" }, method = RequestMethod.GET)
	public void verifyUrl(HttpServletRequest request,HttpServletResponse response) throws IOException {
		//获取url验证参数
		java.util.Map<String, String> reqMap = QiYeUtil.requestServerParam(request);		
		System.out.println("request=" + request.getRequestURL());

		PrintWriter out = response.getWriter();
		ApproveAccessSecret accessSecret =  new ApproveAccessSecret();
		// 通过检验signature对请求进行校验，若校验成功则原样返回echostr，表示接入成功，否则接入失败
		String result = null;
		try {
			WXBizMsgCrypt wxcpt = new WXBizMsgCrypt(accessSecret.getToken(), accessSecret.getEncodingAESKey(),AccessSecret.CORPID);
			result = wxcpt.VerifyURL(reqMap.get("msg_signature"), reqMap.get("timestamp"), reqMap.get("nonce"), reqMap.get("echostr"));
		} catch (AesException e) {
			e.printStackTrace();
		}
		if (result == null) {
			result = accessSecret.getToken();
		}
		out.print(result);
		out.close();
		out = null;
	}
	
	@ResponseBody
	@RequestMapping(value = "/yt/todo/list", method = RequestMethod.POST)
	public void list(HttpServletRequest request, HttpServletResponse response) throws Exception{
		SendWeChatMessage sendMessage = new SendWeChatMessage();
		com.qq.weixin.qiye.pojo.send.TextMessage textMessage = new com.qq.weixin.qiye.pojo.send.TextMessage();
		textMessage.setTouser("@all");
		textMessage.seToparty("");
		textMessage.setTotag("");
		textMessage.setAgentid(1);
		textMessage.setText("您有5个代办事项");	
		System.out.println("message=" + textMessage.toString());
		ApproveAccessSecret accessSecret =  new ApproveAccessSecret();
		sendMessage.sendWeChatMsg(textMessage, accessSecret);
		
	}
	
	@ResponseBody
	@RequestMapping(value = "/wx/todo/listByPage", method = RequestMethod.POST)
	public void listByPage(HttpServletRequest request, HttpServletResponse response) throws Exception{
        // 将请求、响应的编码均设置为UTF-8（防止中文乱码）  
        request.setCharacterEncoding("UTF-8");  
        response.setCharacterEncoding("UTF-8");  

		//获取url验证参数
		java.util.Map<String, String> reqMap = QiYeUtil.requestServerParam(request);		

		
        //从请求中读取整个post数据  
        InputStream inputStream = request.getInputStream();  
        String postData = IOUtils.toString(inputStream, "UTF-8");  
        System.out.println(postData);  
		ApproveAccessSecret accessSecret =  new ApproveAccessSecret();
          
        ////解密消息  
        String msg = "";  
        WXBizMsgCrypt wxcpt = null;  
        try {  
            wxcpt = new WXBizMsgCrypt(accessSecret.getToken(), accessSecret.getEncodingAESKey(),AccessSecret.CORPID);  
            msg = wxcpt.DecryptMsg(reqMap.get("msg_signature"), reqMap.get("timestamp"), reqMap.get("nonce"), postData);              //解密消息  
        } catch (AesException e) {  
            e.printStackTrace();  
        }  
        System.out.println("msg=" + msg);  

		// xml请求解析
		Map<String, String> requestMap = MessageUtil.parseXml(msg);
		String msgType = requestMap.get("MsgType");		// 消息类型
		String eventType = requestMap.get("Event");		// 事件类型
		 if (!(msgType.equals(MessageUtil.REQ_MESSAGE_TYPE_EVENT) &&
				 (eventType.equalsIgnoreCase(MessageUtil.EVENT_TYPE_VIEW))
				 )){
			 // 调用核心业务类接收消息、处理消息
			 String respMessage = CoreService.processRequest(msg);
			 System.out.println("respMessage=" + respMessage);
			 String encryptMsg = "";
			 try {
				 //加密回复消息  
				 encryptMsg = wxcpt.EncryptMsg(respMessage, reqMap.get("timestamp"), reqMap.get("nonce"));  
			 } catch (AesException e) {  
			      e.printStackTrace();  
			 }  
			    
			  // 响应消息  
			  PrintWriter out = response.getWriter();  
			  out.print(encryptMsg); 
			  out.close();  
		 }else{		
				//设置agentId
				HttpSession session = request.getSession();
				if(session.getAttribute("accessSecret") == null)
					session.setAttribute("accessSecret", this.accessSecret);
		 }

      }

}