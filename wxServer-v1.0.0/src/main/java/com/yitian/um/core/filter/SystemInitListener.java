package com.yitian.um.core.filter;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.yitian.common.util.io.PropsUtil;

/**
 * 系统初始化监听器
 */
public class SystemInitListener implements ServletContextListener {
	/**
	 * 初始化
	 */
	@Override
	public final void contextInitialized(final ServletContextEvent sce) {
		log.info("系统启动");
		ServletContext application = sce.getServletContext();
		String sysTitle = PropsUtil.getValue("customer.systemTitle", "customer.properties");
		String sysVerson = PropsUtil.getValue("customer.systemVerson", "customer.properties");
		application.setAttribute("sysTitle", sysTitle);
		application.setAttribute("sysVerson", sysVerson);
	}

	/**
	 * 销毁
	 */
	@Override
	public final void contextDestroyed(final ServletContextEvent sce) {
		log.info("系统停止");
	}

	private final Logger log = LoggerFactory.getLogger(SystemInitListener.class);
}
