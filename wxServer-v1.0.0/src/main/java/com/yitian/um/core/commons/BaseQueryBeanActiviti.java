package com.yitian.um.core.commons;

import java.io.Serializable;
import java.util.List;
import com.yitian.common.bean.SqlGroupBean;
import com.yitian.common.bean.SqlSortBean;
import com.yitian.common.util.io.JsonUtil;

/**
 * 工作流查询
 * 
 * @author pc
 * 
 */
public class BaseQueryBeanActiviti implements Serializable {

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 查询类型
	 */
	private String queryType;
	/**
	 * 业务key
	 */
	private String businessKey;
	/**
	 * 责任人
	 */
	private long assingee;
	/**
	 * 责任人 (older version)
	 */
	private String assingeeStr;
	/**
	 * 导出类型
	 */
	private int exportType;
	/**
	 * 默认查询参数名称
	 */
	private String simpleQueryParam;
	/**
	 * 是否分页（暂时没用）
	 */
	private boolean queryByPage;
	/**
	 * 开始记录
	 */
	private long start;
	/**
	 * 结束记录
	 */
	private String[] processInstanceIds;
	private long limit;
	private long end; // 结束记录
	private List<SqlSortBean> sorters;
	private SqlSortBean sorter;
	private Object sort; // ext传入的排序字符串

	private List<SqlGroupBean> groupers;
	private SqlGroupBean grouper;
	private Object group; // ext传入的排序字符串

	/**
	 * 设置排序字段
	 */
	public final void setSort(final String sortStr) {
		sorter = new SqlSortBean();
		sorters = JsonUtil.json2List(sortStr, SqlSortBean.class);
		if (sorters != null && sorters.size() > 0) {
			sorter = sorters.get(0);
		}
		this.sort = sortStr;
	}

	public String[] getProcessInstanceIds() {
		return processInstanceIds;
	}

	public void setProcessInstanceIds(String[] processInstanceIds) {
		this.processInstanceIds = processInstanceIds;
	}

	/**
	 * 设置分组字段
	 */
	public void setGroup(final Object groupStr) {
		grouper = new SqlGroupBean();
		groupers = JsonUtil.json2List(groupStr.toString(), SqlGroupBean.class);
		if (grouper != null && groupers.size() > 0) {
			grouper = groupers.get(0);
		}
		this.group = groupStr;
	}

	public final String getSort() {
		return sort.toString();
	}

	public String getQueryType() {
		return queryType;
	}

	public void setQueryType(final String queryTypeParm) {
		this.queryType = queryTypeParm;
	}

	public int getExportType() {
		return exportType;
	}

	public void setExportType(final int exportTypeParm) {
		this.exportType = exportTypeParm;
	}

	public String getSimpleQueryParam() {
		return simpleQueryParam;
	}

	public void setSimpleQueryParam(final String simpleQueryParamParm) {
		this.simpleQueryParam = simpleQueryParamParm;
	}

	public boolean isQueryByPage() {
		return queryByPage;
	}

	public void setQueryByPage(final boolean queryByPageParm) {
		this.queryByPage = queryByPageParm;
	}

	public int getStart() {
		return (int) start;
	}

	public void setStart(final long startParm) {
		this.start = startParm;
	}

	public int getLimit() {
		return (int) limit;
	}

	public void setLimit(final long limitParm) {
		this.limit = limitParm;
	}

	public long getEnd() {
		return end;
	}

	public void setEnd(final long endParm) {
		this.end = endParm;
	}

	public SqlSortBean getSorter() {
		return sorter;
	}

	public void setSorter(final SqlSortBean sorterParm) {
		this.sorter = sorterParm;
	}

	public List<SqlSortBean> getSorters() {
		return sorters;
	}

	public void setSorters(final List<SqlSortBean> sortersParm) {
		this.sorters = sortersParm;
	}

	public List<SqlGroupBean> getGroupers() {
		return groupers;
	}

	public void setGroupers(final List<SqlGroupBean> groupersParm) {
		this.groupers = groupersParm;
	}

	public SqlGroupBean getGrouper() {
		return grouper;
	}

	public void setGrouper(final SqlGroupBean grouperParm) {
		this.grouper = grouperParm;
	}

	public String getGroup() {
		return group.toString();
	}

	public String getBusinessKey() {
		return businessKey;
	}

	public void setBusinessKey(String businessKey) {
		this.businessKey = businessKey;
	}

	public String getAssingee() {
		return String.valueOf(assingee);
	}

	public void setAssingee(long assingee) {
		this.assingee = assingee;
	}

	public String getAssingeeStr() {
		return assingeeStr;
	}

	public void setAssingeeStr(String assingeeStr) {
		this.assingeeStr = assingeeStr;
	}
}
