package com.yitian.um.core.controller;

import java.lang.management.ManagementFactory;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.sun.management.OperatingSystemMXBean;

/**
 * 性能信息监控 更多功能可以使用http://www.hyperic.com/
 */
@Controller
@RequestMapping("/core/monitor/performance")
public class MonitorPerformanceController {
	/**
	 * 物理内存和 JVM内存总数
	 */
	@RequestMapping(value = "/total")
	@ResponseBody
	public Map<String, Object> getMemoryTotal() {
		Map<String, Object> memory = new HashMap<String, Object>();
		OperatingSystemMXBean osmxb = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
		memory.put("memoryTotal", osmxb.getTotalPhysicalMemorySize() / 1024 / 1024);
		memory.put("jvmTotal", Runtime.getRuntime().totalMemory() / 1024 / 1024);
		return memory;
	}

	/**
	 * 物理内存使用数
	 */
	@RequestMapping(value = "/memoryUsed")
	@ResponseBody
	public long getMemoryUsed() {
		OperatingSystemMXBean osmxb = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
		return osmxb.getFreePhysicalMemorySize() / 1024 / 1024;
	}

	/**
	 * jvm内存使用数
	 */
	@RequestMapping(value = "/jvmUsed")
	@ResponseBody
	public long getJVMUsed() {
		return Runtime.getRuntime().totalMemory() / 1024 / 1024 - Runtime.getRuntime().freeMemory() / 1024 / 1024;
	}
}
