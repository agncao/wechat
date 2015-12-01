package com.qq.weixin.qiye.pojo.contacts;

import java.io.Serializable;

import lombok.Data;

@Data
public class Dept implements Serializable  {
	private int id;
	private String name;
	private int parentid;
}
