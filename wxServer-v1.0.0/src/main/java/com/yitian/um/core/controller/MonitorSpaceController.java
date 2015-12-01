package com.yitian.um.core.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 空间信息监控
 */
@Controller
@RequestMapping("/core/monitor/space")
public class MonitorSpaceController {
	/**
	 * 存储信息
	 */
	@RequestMapping(value = "/get")
	@ResponseBody
	public List<List<Map<String, Object>>> getInfo() {
		List<List<Map<String, Object>>> driverList = new ArrayList<List<Map<String, Object>>>();
		File[] roots = File.listRoots(); // 获取磁盘分区列表
		List<Map<String, Object>> dataList;
		Map<String, Object> map1;
		Map<String, Object> map2;
		for (File file : roots) {
			dataList = new ArrayList<Map<String, Object>>();
			if (file.getTotalSpace() <= 0) {
				continue;
			}
			String title = file.getPath() + "总容量：" + file.getTotalSpace() / 1024 / 1024 / 1024 + "G";
			long totalSize = file.getTotalSpace() / 1024 / 1024 / 1024;
			long freeSize = file.getFreeSpace() / 1024 / 1024 / 1024;
			long usedSize = totalSize - freeSize;
			map1 = new HashMap<String, Object>();
			map2 = new HashMap<String, Object>();
			map1.put("title", title);
			map1.put("totalSize", totalSize);
			map1.put("label", "空闲未使用 ");
			map1.put("size", freeSize);
			map2.put("title", title);
			map2.put("totalSize", totalSize);
			map2.put("label", "已经使用");
			map2.put("size", usedSize);
			dataList.add(map1);
			dataList.add(map2);
			driverList.add(dataList);
		}
		return driverList;
	}
}
