package com.yitian.um.modules.wx.oauth.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qq.weixin.qiye.pojo.app.ApproveAccessSecret;
import com.qq.weixin.qiye.service.WeiXinContacts;
import com.yitian.um.core.manager.UserManager;

@Controller
public class UserController {
	@Autowired
	private UserManager userManager;
	/**
	 * 加载个人信息，此处添加了@OAuthRequired注解
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"/wx/userInfo.do"})
	@com.qq.weixin.qiye.interceptor.OAuthRequired
	public String load(HttpServletRequest request,Model model){
		System.out.println("Load a User!");
		HttpSession session = request.getSession();
		model.addAttribute("username", session.getAttribute("username"));
		return "hr/userInfo";
	}
	
	/**
	 * 加载个人信息
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"/yt/getUserInfo"})
	@ResponseBody
	public Object getUserInfo(@RequestParam String username){
		java.util.Map<String,Object> map = userManager.getLoginInfoByUsername(username);
		String userWXid = map.get("username").toString();
		ApproveAccessSecret accessSecret = new ApproveAccessSecret();
		WeiXinContacts contracts = new WeiXinContacts();
		com.qq.weixin.qiye.pojo.contacts.User wxUser = contracts.getUserById(userWXid, accessSecret);
		map.put("imgUrl",wxUser.getAvatar());
		return map;
	}
	
	/**
	 * 加载个人角色信息
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"/yt/getUserRoles"})
	@ResponseBody
	public Object getUserRoles(@RequestParam String username){
		java.util.List<java.util.Map<String,Object>> list = userManager.findByUsername(username);
		return list;
	}
	
	/**************************************************************页面跳转 ************************************************************/
	@RequestMapping(value = "/userInfo")
	public String userInfo(){
		return "hr/userInfo";
	}
	@RequestMapping(value = "hr/userRole")
	public String userRole(){
		return "hr/userRole";
	}

}
