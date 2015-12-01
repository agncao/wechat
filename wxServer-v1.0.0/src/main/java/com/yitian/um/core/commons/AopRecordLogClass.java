package com.yitian.um.core.commons;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Service切面类，负责记录Service层日志
 */
@Aspect
@Component
public class AopRecordLogClass {
	/**
	 * 第一个* 代表任意的返回类型 (..) 所有参数
	 */
	@Pointcut("execution(* com.yitian.um..*.*Service.*(..))")
	private void anyMethod() {}; // 声明一个切入点

	/**
	 * 环绕通知
	 */
	@Around("anyMethod()")
	public Object doAround(final ProceedingJoinPoint pjp) throws Throwable { // 要执行pip.proceed方法
		// 调用方法名称
		String methodName = pjp.getSignature().getName();
		// 获取进入的类名
		String className = pjp.getSignature().getDeclaringTypeName();
		className = className.substring(className.lastIndexOf(".") + 1).trim();
		// 调用参数
		Object[] args = pjp.getArgs();
		log.info("--类：{} --方法：{} --参数：{}", className, methodName, args);
		/*
		 * try { result=pjp.proceed(); } catch (Exception e) { log.error("进入" +className+"类中的"+methodName+"的方法 "+"参数为:"+sb+"错误为:"+e.getMessage()); }
		 */
		return pjp.proceed();

	}

	private final Logger log = LoggerFactory.getLogger(AopRecordLogClass.class);
}
