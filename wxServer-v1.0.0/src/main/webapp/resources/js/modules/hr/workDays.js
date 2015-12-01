var date = new Date();
var currentIframeDocument = null;
var currentIframeDocument1 = null;
var currentIframeDocument2 = null;
var currentIframeDocument3 = null;
var currentIframeDocument4 = null;
var currentIframeDocument5 = null;
var currentIframeDocument6 = null;
var currentIframeDocument7 = null;
var currentIframeDocument8 = null;
var currentIframeDocument9 = null;
var currentIframeDocument10 = null;
var currentIframeDocument11 = null;
var currentIframeDocument12 = null;
var currentDataM = null;
var currentDataD = null;
var isHoliday = 1;
var setSkin = 'default';
var setYear = date.getFullYear();
function InitDate() {
	for (var i = 1; i <= 12; i++) {
		WdatePicker({
			eCont : 'month' + i,
			skin : 'default',
			startDate : $("#year").val() + "-" + i + '-1',
			minDate : $("#year").val() + "-" + i + '-1',
			maxDate : $("#year").val() + "-" + i + '-%ld',
			highLineWeekDay : true,
			// specialDates:['2013-07-06'],
			onpicked : function(dp) {
				// $("#txtSelectDate").val(dp.cal.getDateStr('yyyy-MM-dd
				// HH:mm'));
				(dp.$D.id);
				$("#txtSelectDate").val(dp.cal.getDateStr('yyyy-MM-dd'));
				currentDataM = dp.cal.getDateStr('M');
				(parseInt(currentDataM));
				currentDataD = dp.cal.getDateStr('d');
				if (parseInt(currentDataM) == 1)
					currentIframeDocument1 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 2)
					currentIframeDocument2 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 3)
					currentIframeDocument3 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 4)
					currentIframeDocument4 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 5)
					currentIframeDocument5 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 6)
					currentIframeDocument6 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 7)
					currentIframeDocument7 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 8)
					currentIframeDocument8 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 9)
					currentIframeDocument9 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 10)
					currentIframeDocument10 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 11)
					currentIframeDocument11 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				else if (parseInt(currentDataM) == 12)
					currentIframeDocument12 = $($("iframe")[parseInt(currentDataM)
							- 1].contentDocument);
				// currentIframeDocument = $(document.frames[1].document);
			/*	UpdatePickerWwday(parseInt(currentDataM),
						parseInt(currentDataD));*/
						setTimeout("UpdatePickerWwday(parseInt(currentDataM),parseInt(currentDataD));",300);
			}
		});
	}
}
function UpdatePickerWwday(obj, month) {
	
	var v = $("#hdnWwdata" + obj).val().split(",");
	var j = $("#jdata" + obj).val().split(",");
	if (obj == 1) {
		currentIframeDocument1.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument1.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument1.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		/*
		 * currentIframeDocument1.find('td.Wselday').each(function(i,n){
		 * $(n).attr('class','Wday'); $(n).mouseover(function(event) {
		 * this.className = 'WdayOn' }); $(n).mouseout(function(event) {
		 * this.className = 'Wday' }); });
		 */
		var toDay = currentIframeDocument1.find('td.Wday');
		currentIframeDocument1.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(toDay)[0].innerHTML) == month) {
						$(toDay)[0].attr('class', 'Wselday');
						$(toDay)[0].mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(toDay)[0].mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 2) {
		currentIframeDocument2.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument2.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument2.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument2.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 3) {
		currentIframeDocument3.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument3.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument3.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument3.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 4) {
		currentIframeDocument4.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument4.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument4.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument4.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 5) {
		currentIframeDocument5.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument5.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument5.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument5.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 6) {
		currentIframeDocument6.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument6.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument6.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument6.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 7) {
		currentIframeDocument7.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument7.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument7.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument7.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 8) {
		currentIframeDocument8.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument8.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument8.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument8.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 9) {
		currentIframeDocument9.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument9.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument9.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument9.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 10) {
		currentIframeDocument10.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument10.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument10.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument10.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 11) {
		currentIframeDocument11.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument11.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument11.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument11.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	} else if (obj == 12) {
		currentIframeDocument12.find('td.Wwday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument12.find('td.Wzday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument12.find('td.Wtoday').each(function(i, n) {
					$(n).attr('class', 'Wday');
					$(n).mouseover(function(event) {
								this.className = 'WdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wday';
							});
				});
		currentIframeDocument12.find('td.Wday').each(function(i, n) {
					for (var k = 0; k <= v.length; k++) {
						if (v[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wwday');
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
						}
					}
					for (var k = 0; k <= j.length; k++) {
						if (j[k] == parseInt($(n)[0].innerHTML)) {
							$(n).attr('class', 'Wzday');
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wzday';
									});
						}
					}
					if (parseInt($(n)[0].innerHTML) == month) {
						$(n).attr('class', 'Wselday');
						$(n).mouseover(function(event) {
									this.className = 'WseldayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wselday';
								});
					}
				});
	};
	if (isHoliday == 1) {
		work_holiday();
	} else if (isHoliday == 2) {
		festival_holiday();
	} else if (isHoliday == 3) {
		public_holiday();
	}
	var pCount = 0;
	var wCount = 0;
	var jCount = 0;
	for (var sum = 0; sum < 12; sum++) {
		var pLength = $("#hdnWwdata" + (sum + 1)).val().split(",");
		var wLength = $("#wdata" + (sum + 1)).val().split(",");
		var jLength = $("#jdata" + (sum + 1)).val().split(",");
		if (jLength == "") {
			jCount += 0;
		} else {
			jCount += jLength.length;
		}
		if (pLength == "") {
			pCount += 0;
		} else {
			pCount += pLength.length;
		}
		if (wLength == "") {
			wCount += 0;
		} else {
			wCount += wLength.length;
		}
	}
	var sumCount = pCount + wCount + jCount;
	var text = "总天数：" + sumCount + "天;工作日：" + wCount + "天;节假日：" + jCount
			+ "天;公休：" + pCount + "天";
	$("#sumYear").html("<font>" + text + "</font>");
};
// 初始化
function InitSelect() {
	var count = "";
	for (var i = 0; i < 12; i++) {
		count += $("#hdnWwdata" + (i + 1)).val();
	}
	if (count != "") {
		var k = 0;
		try {
			for (k = 0; k < 12; k++) {
				var iObj = $($("iframe")[k].contentDocument);
				$.each(iObj.find('td.Wwday'), function(i, n) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn';
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday';
									});
						});
				$.each(iObj.find('td.Wtoday'), function(i, n) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn';
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday';
									});
						});
				var selday = iObj.find('td.Wselday');
				selday.attr("class", "Wday");
				selday.mouseout(function(eent) {
							this.className = 'Wday';
						});
				$.each(iObj.find('td.Wday'), function(i, n) {
							var festival = $("#hdnWwdata" + (k + 1)).val()
									.split(",");
							var freeDays = $("#jdata" + (k + 1)).val()
									.split(",");
							var workDays = $("#wdata" + (k + 1)).val()
									.split(",");
							var j = 0;
							for (j = 0; j < festival.length; j++) {
								if ($(n).text() == festival[j]) {
									$(n).attr("class", "Wwday");
									$(n).mouseover(function(event) {
												this.className = 'WwdayOn';
											})
									$(n).mouseout(function(event) {
												this.className = 'Wwday';
											});
								}
							}
							for (j = 0; j < freeDays.length; j++) {
								if ($(n).text() == freeDays[j]) {
									$(n).attr("class", "Wzday");
									$(n).mouseover(function(event) {
												this.className = 'WzdayOn';
											})
									$(n).mouseout(function(event) {
												this.className = 'Wzday';
											});
								}
							}
							for (j = 0; j < workDays.length; j++) {
								if ($(n).text() == workDays[j]) {
									$(n).attr("class", "Wday");
									$(n).mouseover(function(event) {
												this.className = 'WdayOn';
											})
									$(n).mouseout(function(event) {
												this.className = 'Wday';
											});
								}
							}
						});
			}
		} catch (err) {
			document.getElementById("lblMsg").innerText = "Initialize data fail, please try it again";
		} finally {
			var pCount = 0;
			var wCount = 0;
			var jCount = 0;
			for (var sum = 0; sum < 12; sum++) {
				var pLength = $("#hdnWwdata" + (sum + 1)).val().split(",");
				var wLength = $("#wdata" + (sum + 1)).val().split(",");
				var jLength = $("#jdata" + (sum + 1)).val().split(",");
				if (jLength == "") {
					jCount += 0;
				} else {
					jCount += jLength.length;
				}
				if (pLength == "") {
					pCount += 0;
				} else {
					pCount += pLength.length;
				}
				if (wLength == "") {
					wCount += 0;
				} else {
					wCount += wLength.length;
				}
			}
			var sumCount = pCount + wCount + jCount;
			var text = "总天数：" + sumCount + "天;工作日：" + wCount + "天;节假日："
					+ jCount + "天;公休：" + pCount + "天";
			$("#sumYear").html("<font>" + text + "</font>");
			$.unblockUI();
		}
	} else {
		var k = 0;
		try {
			for (k = 0; k < 12; k++) {
				var iObj = $($("iframe")[k].contentDocument);
				var pCount = "";
				var wCount = "";
				$.each(iObj.find('td.Wwday'), function(i, n) {
							if (pCount == "") {
								pCount = parseInt($(n)[0].innerHTML);
							} else {
								pCount += "," + parseInt($(n)[0].innerHTML);
							}
						});
				$.each(iObj.find('td.Wday'), function(i, n) {
							if (wCount == "") {
								wCount = parseInt($(n)[0].innerHTML);
							} else {
								wCount += "," + parseInt($(n)[0].innerHTML);
							}
						});
				$.each(iObj.find('td.Wselday'), function(i, n) {
							if ($(n)[0].cellIndex == 0
									|| $(n)[0].cellIndex == 6) {
								$(n).attr("class", "Wwday");
								$(n).mouseover(function(event) {
											this.className = 'WwdayOn';
										})
								$(n).mouseout(function(event) {
											this.className = 'Wwday';
										});
								pCount += "," + parseInt($(n)[0].innerHTML);
							} else {
								$(n).attr("class", "Wday");
								$(n).mouseover(function(event) {
											this.className = 'WdayOn';
										})
								$(n).mouseout(function(event) {
											this.className = 'Wday';
										});
								wCount += "," + parseInt($(n)[0].innerHTML);
							}
						});
				$.each(iObj.find('td.Wtoday'), function(i, n) {
							if ($(n)[0].cellIndex == 0
									|| $(n)[0].cellIndex == 6) {
								$(n).attr("class", "Wwday");
								$(n).mouseover(function(event) {
											this.className = 'WwdayOn';
										})
								$(n).mouseout(function(event) {
											this.className = 'Wwday';
										});
								pCount += "," + parseInt($(n)[0].innerHTML);
							} else {
								$(n).attr("class", "Wday");
								$(n).mouseover(function(event) {
											this.className = 'WdayOn';
										})
								$(n).mouseout(function(event) {
											this.className = 'Wday';
										});
								wCount += "," + parseInt($(n)[0].innerHTML);
							}
						});
				$("#hdnWwdata" + (k + 1)).val(pCount);
				$("#wdata" + (k + 1)).val(wCount);
			}
		} catch (err) {
			document.getElementById("lblMsg").innerText = "Initialize data fail, please try it again";
		} finally {
			var pCount = 0;
			var wCount = 0;
			var jCount = 0;
			for (var sum = 0; sum < 12; sum++) {
				pCount += $("#hdnWwdata" + (sum + 1)).val().split(",").length;
				wCount += $("#wdata" + (sum + 1)).val().split(",").length;
				var jLength = $("#jdata" + (sum + 1)).val().split(",");
				if (jLength == "") {
					jCount = 0;
				} else {
					jCount += jLength.length;
				}
			}
			var sumCount = pCount + wCount + jCount;
			var text = "总天数：" + sumCount + "天;工作日：" + wCount + "天;节假日："
					+ jCount + "天;公休：" + pCount + "天";
			$("#sumYear").html("<font>" + text + "</font>");
			$.unblockUI();
		}
		// for (k = 1; k < 13; k++) {
		// $("#hdnWwdata" + k).val($("#hdnWwdata" + k).val().substring(1));
		// if ($("#hdnWwdata" + k).val().substring(0, 1) == "2" ||
		// $("#hdnWwdata" + k).val().substring(0, 1) == "7") {
		// $("#hdnWwdata" + k).val("1," + $("#hdnWwdata" + k).val())
		// }
		// }
	}
}
$(document).ready(function() {
	var date = new Date();
	if ($("#dqYear").val() == "" || $("#dqYear").val() == null
			|| $("#dqYear").val() == "undefined") {
		$("#dqYear").val(date.getFullYear());
	}
	/*
	 * Ext.create('Ext.form.DateField', { renderTo: 'divId', anchor: '100%',
	 * name: 'date', // The value matches the format; will be parsed and
	 * displayed using that format. width : '130', format: 'm d Y', value: '2 4
	 * 1978' });
	 */
	$.blockUI({
				message : '正在初始化，请稍后...',
				css : {
					border : 'none',
					padding : '10px',
					backgroundColor : '#000',
					'-webkit-border-radius' : '10px',
					'-moz-border-radius' : '10px',
					opacity : .5,
					color : '#fff'
				}
			});
	// $("#radio").buttonset();
	// $("#year").val($("#dqYear").val());
	for (var i = -5; i <= 4; i++) {
		$("#year").append("<option value='"
				+ (parseInt($("#dqYear").val()) + i) + "'>"
				+ (parseInt($("#dqYear").val()) + i) + "</option>"); // 添加一项option
		// $("#year").prepend("<option value='1999'>1999</option>");
		// //在前面插入一项option
	}
	$("#year option[value=" + $("#dqYear").val() + "]").attr("selected", true);
	InitDate();
	setTimeout("InitSelect()", 2000);
});
// 设置公休
function public_holiday() {
	var month = $("#txtSelectDate").val().substring(5, 7);
	var day = parseInt($("#txtSelectDate").val().substring(8, 10));
	(day);
	if (month == '01') {
		currentIframeDocument1.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata1").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata1").val().split(",");
					var wHoliady = $("#wdata1").val();
					var jHoliady = $("#jdata1").val();
					if ($("#wdata1").val() != "") {
						wHoliady = $("#wdata1").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata1").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata1").val() != "") {
						jHoliady = $("#jdata1").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata1").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					$("#hdnWwdata1").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata1").val().split(",");
					var wHoliady = $("#wdata1").val();
					var jHoliady = $("#jdata1").val();
					if ($("#wdata1").val() != "") {
						wHoliady = $("#wdata1").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata1").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata1").val() != "") {
						jHoliady = $("#jdata1").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata1").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
							return;
						}
					}// else {
					$("#hdnWwdata1").val($("#hdnWwdata1").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '02') {
		currentIframeDocument2.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata2").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata2").val().split(",");
					var wHoliady = $("#wdata2").val();
					var jHoliady = $("#jdata2").val();
					if ($("#wdata2").val() != "") {
						wHoliady = $("#wdata2").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata2").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata2").val() != "") {
						jHoliady = $("#jdata2").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata2").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					$("#hdnWwdata2").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata2").val().split(",");
					var wHoliady = $("#wdata2").val();
					var jHoliady = $("#jdata2").val();
					if ($("#wdata2").val() != "") {
						wHoliady = $("#wdata2").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata2").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata2").val() != "") {
						jHoliady = $("#jdata2").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata2").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
							return;
						}
					}// else {
					$("#hdnWwdata2").val($("#hdnWwdata2").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '03') {
		currentIframeDocument3.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata3").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata3").val().split(",");
					var wHoliady = $("#wdata3").val();
					var jHoliady = $("#jdata3").val();
					if ($("#wdata3").val() != "") {
						wHoliady = $("#wdata3").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata3").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata3").val() != "") {
						jHoliady = $("#jdata3").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata3").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					$("#hdnWwdata3").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata3").val().split(",");
					var wHoliady = $("#wdata3").val();
					var jHoliady = $("#jdata3").val();
					if ($("#wdata3").val() != "") {
						wHoliady = $("#wdata3").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata3").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata3").val() != "") {
						jHoliady = $("#jdata3").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata3").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
							return;
						}
					}// else {
					$("#hdnWwdata3").val($("#hdnWwdata3").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '04') {
		currentIframeDocument4.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata4").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata4").val().split(",");
					var wHoliady = $("#wdata4").val();
					var jHoliady = $("#jdata4").val();
					if ($("#wdata4").val() != "") {
						wHoliady = $("#wdata4").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata4").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata4").val() != "") {
						jHoliady = $("#jdata4").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata4").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					$("#hdnWwdata4").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata4").val().split(",");
					var wHoliady = $("#wdata4").val();
					var jHoliady = $("#jdata4").val();
					if ($("#wdata4").val() != "") {
						wHoliady = $("#wdata4").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata4").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata4").val() != "") {
						jHoliady = $("#jdata4").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata4").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
							return;
						}
					}// else {
					$("#hdnWwdata4").val($("#hdnWwdata4").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '05') {
		currentIframeDocument5.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata5").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata5").val().split(",");
					var wHoliady = $("#wdata5").val();
					var jHoliady = $("#jdata5").val();
					if ($("#wdata5").val() != "") {
						wHoliady = $("#wdata5").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata5").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata5").val() != "") {
						jHoliady = $("#jdata5").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata5").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					$("#hdnWwdata5").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata5").val().split(",");
					var wHoliady = $("#wdata5").val();
					var jHoliady = $("#jdata5").val();
					if ($("#wdata5").val() != "") {
						wHoliady = $("#wdata5").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata5").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata5").val() != "") {
						jHoliady = $("#jdata5").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata5").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn';
								});
						$(n).mouseout(function(event) {
									this.className = 'Wwday';
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn';
									});
							$(n).mouseout(function(event) {
										this.className = 'Wwday';
									});
							return;
						}
					}// else {
					$("#hdnWwdata5").val($("#hdnWwdata5").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn';
							});
					$(n).mouseout(function(event) {
								this.className = 'Wwday';
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '06') {
		currentIframeDocument6.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata6").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata6").val().split(",");
					var wHoliady = $("#wdata6").val();
					var jHoliady = $("#jdata6").val();
					if ($("#wdata6").val() != "") {
						wHoliady = $("#wdata6").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata6").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata6").val() != "") {
						jHoliady = $("#jdata6").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata6").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata6").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata6").val().split(",");
					var wHoliady = $("#wdata6").val();
					var jHoliady = $("#jdata6").val();
					if ($("#wdata6").val() != "") {
						wHoliady = $("#wdata6").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata6").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata6").val() != "") {
						jHoliady = $("#jdata6").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata6").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata6").val($("#hdnWwdata6").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '07') {
		currentIframeDocument7.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata7").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata7").val().split(",");
					var wHoliady = $("#wdata7").val();
					var jHoliady = $("#jdata7").val();
					if ($("#wdata7").val() != "") {
						wHoliady = $("#wdata7").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata7").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata7").val() != "") {
						jHoliady = $("#jdata7").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata7").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata7").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata7").val().split(",");
					var wHoliady = $("#wdata7").val();
					var jHoliady = $("#jdata7").val();
					if ($("#wdata7").val() != "") {
						wHoliady = $("#wdata7").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata7").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata7").val() != "") {
						jHoliady = $("#jdata7").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata7").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata7").val($("#hdnWwdata7").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '08') {
		currentIframeDocument8.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata8").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata8").val().split(",");
					var wHoliady = $("#wdata8").val();
					var jHoliady = $("#jdata8").val();
					if ($("#wdata8").val() != "") {
						wHoliady = $("#wdata8").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata8").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata8").val() != "") {
						jHoliady = $("#jdata8").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata8").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata8").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata8").val().split(",");
					var wHoliady = $("#wdata8").val();
					var jHoliady = $("#jdata8").val();
					if ($("#wdata8").val() != "") {
						wHoliady = $("#wdata8").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata8").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata8").val() != "") {
						jHoliady = $("#jdata8").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata8").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata8").val($("#hdnWwdata8").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '09') {
		currentIframeDocument9.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata9").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata9").val().split(",");
					var wHoliady = $("#wdata9").val();
					var jHoliady = $("#jdata9").val();
					if ($("#wdata9").val() != "") {
						wHoliady = $("#wdata9").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata9").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata9").val() != "") {
						jHoliady = $("#jdata9").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata9").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata9").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata9").val().split(",");
					var wHoliady = $("#wdata9").val();
					var jHoliady = $("#jdata9").val();
					if ($("#wdata9").val() != "") {
						wHoliady = $("#wdata9").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata9").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata9").val() != "") {
						jHoliady = $("#jdata9").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata9").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata9").val($("#hdnWwdata9").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '10') {
		currentIframeDocument10.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata10").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata10").val().split(",");
					var wHoliady = $("#wdata10").val();
					var jHoliady = $("#jdata10").val();
					if ($("#wdata10").val() != "") {
						wHoliady = $("#wdata10").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata10").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata10").val() != "") {
						jHoliady = $("#jdata10").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata10").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata10").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata10").val().split(",");
					var wHoliady = $("#wdata10").val();
					var jHoliady = $("#jdata10").val();
					if ($("#wdata10").val() != "") {
						wHoliady = $("#wdata10").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata10").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata10").val() != "") {
						jHoliady = $("#jdata10").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata10").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata10").val($("#hdnWwdata10").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '11') {
		currentIframeDocument11.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata11").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata11").val().split(",");
					var wHoliady = $("#wdata11").val();
					var jHoliady = $("#jdata11").val();
					if ($("#wdata11").val() != "") {
						wHoliady = $("#wdata11").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata11").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata11").val() != "") {
						jHoliady = $("#jdata11").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata11").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata11").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata11").val().split(",");
					var wHoliady = $("#wdata11").val();
					var jHoliady = $("#jdata11").val();
					if ($("#wdata11").val() != "") {
						wHoliady = $("#wdata11").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata11").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata11").val() != "") {
						jHoliady = $("#jdata11").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata11").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata11").val($("#hdnWwdata11").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '12') {
		currentIframeDocument12.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#hdnWwdata12").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata12").val().split(",");
					var wHoliady = $("#wdata12").val();
					var jHoliady = $("#jdata12").val();
					if ($("#wdata12").val() != "") {
						wHoliady = $("#wdata12").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata12").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata12").val() != "") {
						jHoliady = $("#jdata12").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata12").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					$("#hdnWwdata12").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
				} else {
					var isNO = true;
					var pHoliady = $("#hdnWwdata12").val().split(",");
					var wHoliady = $("#wdata12").val();
					var jHoliady = $("#jdata12").val();
					if ($("#wdata12").val() != "") {
						wHoliady = $("#wdata12").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata12").val(count);
					} else {
						isNO = false;
					}
					if ($("#jdata12").val() != "") {
						jHoliady = $("#jdata12").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata12").val(count);
					} else {
						isNO = false;
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wwday");
						$(n).mouseover(function(event) {
									this.className = 'WwdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wwday'
								});
						return;
					};
					for (i = 0; i < pHoliady.length; i++) {
						if (pHoliady[i] == day) {
							$(n).attr("class", "Wwday");
							$(n).mouseover(function(event) {
										this.className = 'WwdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wwday'
									});
							return;
						}
					}// else {
					$("#hdnWwdata12").val($("#hdnWwdata12").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wwday");
					$(n).mouseover(function(event) {
								this.className = 'WwdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wwday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	}
}
// 设置节假日
function festival_holiday() {
	var month = $("#txtSelectDate").val().substring(5, 7);
	var day = parseInt($("#txtSelectDate").val().substring(8, 10));
	(day);
	if (month == '01') {
		currentIframeDocument1.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata1").val() == "") {
					var pHoliady = $("#hdnWwdata1").val();
					var wHoliady = $("#wdata1").val();
					var isNO = true;
					if ($("#hdnWwdata1").val() != "") {
						pHoliady = $("#hdnWwdata1").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata1").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata1").val() != "") {
						wHoliady = $("#wdata1").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata1").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata1").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata1").val();
					var wHoliady = $("#wdata1").val();
					var jHoliady = $("#jdata1").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata1").val() != "") {
						pHoliady = $("#hdnWwdata1").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata1").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata1").val() != "") {
						wHoliady = $("#wdata1").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata1").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata1").val($("#jdata1").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '02') {
		currentIframeDocument2.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata2").val() == "") {
					var pHoliady = $("#hdnWwdata2").val();
					var wHoliady = $("#wdata2").val();
					var isNO = true;
					if ($("#hdnWwdata2").val() != "") {
						pHoliady = $("#hdnWwdata2").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata2").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata2").val() != "") {
						wHoliady = $("#wdata2").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata2").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata2").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata2").val();
					var wHoliady = $("#wdata2").val();
					var jHoliady = $("#jdata2").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata2").val() != "") {
						pHoliady = $("#hdnWwdata2").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata2").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata2").val() != "") {
						wHoliady = $("#wdata2").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata2").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata2").val($("#jdata2").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
				}
				($("#hdnWwdata2").val());
			}
		});
	} else if (month == '03') {
		currentIframeDocument3.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata3").val() == "") {
					var pHoliady = $("#hdnWwdata3").val();
					var wHoliady = $("#wdata3").val();
					var isNO = true;
					if ($("#hdnWwdata3").val() != "") {
						pHoliady = $("#hdnWwdata3").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata3").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata3").val() != "") {
						wHoliady = $("#wdata3").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata3").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata3").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata3").val();
					var wHoliady = $("#wdata3").val();
					var jHoliady = $("#jdata3").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata3").val() != "") {
						pHoliady = $("#hdnWwdata3").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata3").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata3").val() != "") {
						wHoliady = $("#wdata3").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata3").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata3").val($("#jdata3").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '04') {
		currentIframeDocument4.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata4").val() == "") {
					var pHoliady = $("#hdnWwdata4").val();
					var wHoliady = $("#wdata4").val();
					var isNO = true;
					if ($("#hdnWwdata4").val() != "") {
						pHoliady = $("#hdnWwdata4").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata4").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata4").val() != "") {
						wHoliady = $("#wdata4").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata4").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata4").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata4").val();
					var wHoliady = $("#wdata4").val();
					var jHoliady = $("#jdata4").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata4").val() != "") {
						pHoliady = $("#hdnWwdata4").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata4").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata4").val() != "") {
						wHoliady = $("#wdata4").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata4").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata4").val($("#jdata4").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '05') {
		currentIframeDocument5.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata5").val() == "") {
					var pHoliady = $("#hdnWwdata5").val();
					var wHoliady = $("#wdata5").val();
					var isNO = true;
					if ($("#hdnWwdata5").val() != "") {
						pHoliady = $("#hdnWwdata5").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata5").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata5").val() != "") {
						wHoliady = $("#wdata5").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata5").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata5").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata5").val();
					var wHoliady = $("#wdata5").val();
					var jHoliady = $("#jdata5").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata5").val() != "") {
						pHoliady = $("#hdnWwdata5").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata5").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata5").val() != "") {
						wHoliady = $("#wdata5").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata5").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata5").val($("#jdata5").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '06') {
		currentIframeDocument6.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata6").val() == "") {
					var pHoliady = $("#hdnWwdata6").val();
					var wHoliady = $("#wdata6").val();
					var isNO = true;
					if ($("#hdnWwdata6").val() != "") {
						pHoliady = $("#hdnWwdata6").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata6").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata6").val() != "") {
						wHoliady = $("#wdata6").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata6").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata6").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata6").val();
					var wHoliady = $("#wdata6").val();
					var jHoliady = $("#jdata6").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata6").val() != "") {
						pHoliady = $("#hdnWwdata6").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata6").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata6").val() != "") {
						wHoliady = $("#wdata6").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata6").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata6").val($("#jdata6").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '07') {
		currentIframeDocument7.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata7").val() == "") {
					var pHoliady = $("#hdnWwdata7").val();
					var wHoliady = $("#wdata7").val();
					var isNO = true;
					if ($("#hdnWwdata7").val() != "") {
						pHoliady = $("#hdnWwdata7").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata7").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata7").val() != "") {
						wHoliady = $("#wdata7").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata7").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata7").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata7").val();
					var wHoliady = $("#wdata7").val();
					var jHoliady = $("#jdata7").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata7").val() != "") {
						pHoliady = $("#hdnWwdata7").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata7").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata7").val() != "") {
						wHoliady = $("#wdata7").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata7").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata7").val($("#jdata7").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '08') {
		currentIframeDocument8.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata8").val() == "") {
					var pHoliady = $("#hdnWwdata8").val();
					var wHoliady = $("#wdata8").val();
					var isNO = true;
					if ($("#hdnWwdata8").val() != "") {
						pHoliady = $("#hdnWwdata8").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata8").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata8").val() != "") {
						wHoliady = $("#wdata8").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata8").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata8").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata8").val();
					var wHoliady = $("#wdata8").val();
					var jHoliady = $("#jdata8").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata8").val() != "") {
						pHoliady = $("#hdnWwdata8").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata8").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata8").val() != "") {
						wHoliady = $("#wdata8").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata8").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata8").val($("#jdata8").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '09') {
		currentIframeDocument9.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata9").val() == "") {
					var pHoliady = $("#hdnWwdata9").val();
					var wHoliady = $("#wdata9").val();
					var isNO = true;
					if ($("#hdnWwdata9").val() != "") {
						pHoliady = $("#hdnWwdata9").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata9").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata9").val() != "") {
						wHoliady = $("#wdata9").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata9").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata9").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata9").val();
					var wHoliady = $("#wdata9").val();
					var jHoliady = $("#jdata9").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata9").val() != "") {
						pHoliady = $("#hdnWwdata9").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata9").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata9").val() != "") {
						wHoliady = $("#wdata9").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata9").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					} // else {
					$("#jdata9").val($("#jdata9").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '10') {
		currentIframeDocument10.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata10").val() == "") {
					var pHoliady = $("#hdnWwdata10").val();
					var wHoliady = $("#wdata10").val();
					var isNO = true;
					if ($("#hdnWwdata10").val() != "") {
						pHoliady = $("#hdnWwdata10").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata10").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata10").val() != "") {
						wHoliady = $("#wdata10").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata10").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata10").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata10").val();
					var wHoliady = $("#wdata10").val();
					var jHoliady = $("#jdata10").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata10").val() != "") {
						pHoliady = $("#hdnWwdata10").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata10").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata10").val() != "") {
						wHoliady = $("#wdata10").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata10").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata10").val($("#jdata10").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '11') {
		currentIframeDocument11.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata11").val() == "") {
					var pHoliady = $("#hdnWwdata11").val();
					var wHoliady = $("#wdata11").val();
					var isNO = true;
					if ($("#hdnWwdata11").val() != "") {
						pHoliady = $("#hdnWwdata11").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata11").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata11").val() != "") {
						wHoliady = $("#wdata11").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata11").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata11").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata11").val();
					var wHoliady = $("#wdata11").val();
					var jHoliady = $("#jdata11").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata11").val() != "") {
						pHoliady = $("#hdnWwdata11").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata11").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata11").val() != "") {
						wHoliady = $("#wdata11").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata11").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata11").val($("#jdata11").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '12') {
		currentIframeDocument12.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#jdata12").val() == "") {
					var pHoliady = $("#hdnWwdata12").val();
					var wHoliady = $("#wdata12").val();
					var isNO = true;
					if ($("#hdnWwdata12").val() != "") {
						pHoliady = $("#hdnWwdata12").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata12").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata12").val() != "") {
						wHoliady = $("#wdata12").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata12").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					$("#jdata12").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
				} else {
					var pHoliady = $("#hdnWwdata12").val();
					var wHoliady = $("#wdata12").val();
					var jHoliady = $("#jdata12").val().split(",");
					var isNO = true;
					if ($("#hdnWwdata12").val() != "") {
						pHoliady = $("#hdnWwdata12").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata12").val(count);
					} else {
						isNO = false;
					}
					if ($("#wdata12").val() != "") {
						wHoliady = $("#wdata12").val().split(",");
						var count = "";
						for (var j = 0; j < wHoliady.length; j++) {
							if (wHoliady[j] != day) {
								if (count == "") {
									count = wHoliady[j];
								} else {
									count += "," + wHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#wdata12").val(count);
					} else {
						isNO = false;
					}
					if (isNO) {
						$(n).attr("class", "Wzday");
						$(n).mouseover(function(event) {
									this.className = 'WzdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wzday'
								});
						return;
					}
					var i = 0;
					for (i = 0; i < jHoliady.length; i++) {
						if (jHoliady[i] == day) {
							$(n).attr("class", "Wzday");
							$(n).mouseover(function(event) {
										this.className = 'WzdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wzday'
									});
							return;
						}
					}// else {
					$("#jdata12").val($("#jdata12").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wzday");
					$(n).mouseover(function(event) {
								this.className = 'WzdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wzday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	}
};
// 设置工作日
function work_holiday() {
	var month = $("#txtSelectDate").val().substring(5, 7);
	var day = parseInt($("#txtSelectDate").val().substring(8, 10));
	(day);
	if (month == '01') {
		currentIframeDocument1.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata1").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata1").val();
					var jHoliady = $("#jdata1").val();
					if ($("#hdnWwdata1").val() != "") {
						pHoliady = $("#hdnWwdata1").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata1").val(count);
					}
					if ($("#jdata1").val() != "") {
						jHoliady = $("#jdata1").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata1").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata1").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata1").val();
					var wHoliady = $("#wdata1").val().split(",");
					var jHoliady = $("#jdata1").val();
					var isNO = true;
					if ($("#hdnWwdata1").val() != "") {
						pHoliady = $("#hdnWwdata1").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata1").val(count);
					}
					if ($("#jdata1").val() != "") {
						jHoliady = $("#jdata1").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata1").val(count);
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata1").val($("#wdata1").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '02') {
		currentIframeDocument2.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata2").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata2").val();
					var jHoliady = $("#jdata2").val();
					if ($("#hdnWwdata2").val() != "") {
						pHoliady = $("#hdnWwdata2").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata2").val(count);
					}
					if ($("#jdata2").val() != "") {
						jHoliady = $("#jdata2").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata2").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata2").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata2").val();
					var wHoliady = $("#wdata2").val().split(",");
					var jHoliady = $("#jdata2").val();
					var isNO = true;
					if ($("#hdnWwdata2").val() != "") {
						pHoliady = $("#hdnWwdata2").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata2").val(count);
					}
					if ($("#jdata2").val() != "") {
						jHoliady = $("#jdata2").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata2").val(count);
					}
					var i = 0;
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata2").val($("#wdata2").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '03') {
		currentIframeDocument3.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata3").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata3").val();
					var jHoliady = $("#jdata3").val();
					if ($("#hdnWwdata3").val() != "") {
						pHoliady = $("#hdnWwdata3").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata3").val(count);
					}
					if ($("#jdata3").val() != "") {
						jHoliady = $("#jdata3").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata3").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata3").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata3").val();
					var wHoliady = $("#wdata3").val().split(",");
					var jHoliady = $("#jdata3").val();
					var isNO = true;
					if ($("#hdnWwdata3").val() != "") {
						pHoliady = $("#hdnWwdata3").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata3").val(count);
					}
					if ($("#jdata3").val() != "") {
						jHoliady = $("#jdata3").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata3").val(count);
					}
					// var i=0;
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata3").val($("#wdata3").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '04') {
		currentIframeDocument4.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata4").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata4").val();
					var jHoliady = $("#jdata4").val();
					if ($("#hdnWwdata4").val() != "") {
						pHoliady = $("#hdnWwdata4").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata4").val(count);
					}
					if ($("#jdata4").val() != "") {
						jHoliady = $("#jdata4").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata4").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata4").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata4").val();
					var wHoliady = $("#wdata4").val().split(",");
					var jHoliady = $("#jdata4").val();
					var isNO = true;
					if ($("#hdnWwdata4").val() != "") {
						pHoliady = $("#hdnWwdata4").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata4").val(count);
					}
					if ($("#jdata4").val() != "") {
						jHoliady = $("#jdata4").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata4").val(count);
					}
					// var i=0;
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata4").val($("#wdata4").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '05') {
		currentIframeDocument5.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata5").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata5").val();
					var jHoliady = $("#jdata5").val();
					if ($("#hdnWwdata5").val() != "") {
						pHoliady = $("#hdnWwdata5").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata5").val(count);
					}
					if ($("#jdata5").val() != "") {
						jHoliady = $("#jdata5").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata5").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata5").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata5").val();
					var wHoliady = $("#wdata5").val().split(",");
					var jHoliady = $("#jdata5").val();
					var isNO = true;
					if ($("#hdnWwdata5").val() != "") {
						pHoliady = $("#hdnWwdata5").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata5").val(count);
					}
					if ($("#jdata5").val() != "") {
						jHoliady = $("#jdata5").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata5").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					} // else {
					$("#wdata5").val($("#wdata5").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '06') {
		currentIframeDocument6.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata6").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata6").val();
					var jHoliady = $("#jdata6").val();
					if ($("#hdnWwdata6").val() != "") {
						pHoliady = $("#hdnWwdata6").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata6").val(count);
					}
					if ($("#jdata6").val() != "") {
						jHoliady = $("#jdata6").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata6").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata6").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata6").val();
					var wHoliady = $("#wdata6").val().split(",");
					var jHoliady = $("#jdata6").val();
					var isNO = true;
					if ($("#hdnWwdata6").val() != "") {
						pHoliady = $("#hdnWwdata6").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata6").val(count);
					}
					if ($("#jdata6").val() != "") {
						jHoliady = $("#jdata6").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata6").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata6").val($("#wdata6").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '07') {
		currentIframeDocument7.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata7").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata7").val();
					var jHoliady = $("#jdata7").val();
					if ($("#hdnWwdata7").val() != "") {
						pHoliady = $("#hdnWwdata7").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata7").val(count);
					}
					if ($("#jdata7").val() != "") {
						jHoliady = $("#jdata7").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata7").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata7").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata7").val();
					var wHoliady = $("#wdata7").val().split(",");
					var jHoliady = $("#jdata7").val();
					var isNO = true;
					if ($("#hdnWwdata7").val() != "") {
						pHoliady = $("#hdnWwdata7").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata7").val(count);
					}
					if ($("#jdata7").val() != "") {
						jHoliady = $("#jdata7").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata7").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata7").val($("#wdata7").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '08') {
		currentIframeDocument8.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata8").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata8").val();
					var jHoliady = $("#jdata8").val();
					if ($("#hdnWwdata8").val() != "") {
						pHoliady = $("#hdnWwdata8").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata8").val(count);
					}
					if ($("#jdata8").val() != "") {
						jHoliady = $("#jdata8").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata8").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata8").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata8").val();
					var wHoliady = $("#wdata8").val().split(",");
					var jHoliady = $("#jdata8").val();
					var isNO = true;
					if ($("#hdnWwdata8").val() != "") {
						pHoliady = $("#hdnWwdata8").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata8").val(count);
					}
					if ($("#jdata8").val() != "") {
						jHoliady = $("#jdata8").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata8").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata8").val($("#wdata8").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '09') {
		currentIframeDocument9.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata9").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata9").val();
					var jHoliady = $("#jdata9").val();
					if ($("#hdnWwdata9").val() != "") {
						pHoliady = $("#hdnWwdata9").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata9").val(count);
					}
					if ($("#jdata9").val() != "") {
						jHoliady = $("#jdata9").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata9").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata9").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata9").val();
					var wHoliady = $("#wdata9").val().split(",");
					var jHoliady = $("#jdata9").val();
					var isNO = true;
					if ($("#hdnWwdata9").val() != "") {
						pHoliady = $("#hdnWwdata9").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata9").val(count);
					}
					if ($("#jdata9").val() != "") {
						jHoliady = $("#jdata9").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata9").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata9").val($("#wdata9").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '10') {
		currentIframeDocument10.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata10").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata10").val();
					var jHoliady = $("#jdata10").val();
					if ($("#hdnWwdata10").val() != "") {
						pHoliady = $("#hdnWwdata10").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata10").val(count);
					}
					if ($("#jdata10").val() != "") {
						jHoliady = $("#jdata10").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata10").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata10").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata10").val();
					var wHoliady = $("#wdata10").val().split(",");
					var jHoliady = $("#jdata10").val();
					var isNO = true;
					if ($("#hdnWwdata10").val() != "") {
						pHoliady = $("#hdnWwdata10").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata10").val(count);
					}
					if ($("#jdata10").val() != "") {
						jHoliady = $("#jdata10").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata10").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata10").val($("#wdata10").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '11') {
		currentIframeDocument11.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata11").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata11").val();
					var jHoliady = $("#jdata11").val();
					if ($("#hdnWwdata11").val() != "") {
						pHoliady = $("#hdnWwdata11").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata11").val(count);
					}
					if ($("#jdata11").val() != "") {
						jHoliady = $("#jdata11").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata11").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata11").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata11").val();
					var wHoliady = $("#wdata11").val().split(",");
					var jHoliady = $("#jdata11").val();
					var isNO = true;
					if ($("#hdnWwdata11").val() != "") {
						pHoliady = $("#hdnWwdata11").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata11").val(count);
					}
					if ($("#jdata11").val() != "") {
						jHoliady = $("#jdata11").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata11").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata11").val($("#wdata11").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	} else if (month == '12') {
		currentIframeDocument12.find('td.Wselday').each(function(i, n) {
			if (day == parseInt($(n)[0].innerHTML)) {
				if ($("#wdata12").val() == "") {
					var isNO = true;
					var pHoliady = $("#hdnWwdata12").val();
					var jHoliady = $("#jdata12").val();
					if ($("#hdnWwdata12").val() != "") {
						pHoliady = $("#hdnWwdata12").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata12").val(count);
					}
					if ($("#jdata12").val() != "") {
						jHoliady = $("#jdata12").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata12").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					$("#wdata12").val(parseInt($(n)[0].innerHTML));
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
				} else {
					var pHoliady = $("#hdnWwdata12").val();
					var wHoliady = $("#wdata12").val().split(",");
					var jHoliady = $("#jdata12").val();
					var isNO = true;
					if ($("#hdnWwdata12").val() != "") {
						pHoliady = $("#hdnWwdata12").val().split(",");
						var count = "";
						for (var j = 0; j < pHoliady.length; j++) {
							if (pHoliady[j] != day) {
								if (count == "") {
									count = pHoliady[j];
								} else {
									count += "," + pHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#hdnWwdata12").val(count);
					}
					if ($("#jdata12").val() != "") {
						jHoliady = $("#jdata12").val().split(",");
						var count = "";
						for (var j = 0; j < jHoliady.length; j++) {
							if (jHoliady[j] != day) {
								if (count == "") {
									count = jHoliady[j];
								} else {
									count += "," + jHoliady[j];
								}
							} else {
								isNO = false;
							}
						}
						$("#jdata12").val(count);
					}
					if (isNO) {
						$(n).attr("class", "Wday");
						$(n).mouseover(function(event) {
									this.className = 'WdayOn'
								})
						$(n).mouseout(function(event) {
									this.className = 'Wday'
								});
						return;
					}
					// var i=0;
					for (i = 0; i < wHoliady.length; i++) {
						if (wHoliady[i] == day) {
							$(n).attr("class", "Wday");
							$(n).mouseover(function(event) {
										this.className = 'WdayOn'
									})
							$(n).mouseout(function(event) {
										this.className = 'Wday'
									});
							return;
						}
					}// else {
					$("#wdata12").val($("#wdata12").val() + ","
							+ parseInt($(n)[0].innerHTML) + "");
					$(n).attr("class", "Wday");
					$(n).mouseover(function(event) {
								this.className = 'WdayOn'
							})
					$(n).mouseout(function(event) {
								this.className = 'Wday'
							});
					// }
					// }
					($("#hdnWwdata2").val());
				}
			}
		});
	}
};
function setHoliday(holiday) {
	isHoliday = holiday;
};
function f() {
	obj = document.getElementsByName("radio");
	var dio = "";
	if (obj != null) {
		var i;
		for (i = 0; i < obj.length; i++) {
			if (obj[i].checked) {
				dio = obj[i].value;
			}
		}
	}
	// var s=$("#selectAge")[0].options[$("#selectAge")[0].selectedIndex].text;
	var pdate = "";
	var jdate = "";
	var gdate = "";
	var pCount = 0;
	var jCount = 0;
	var gCount = 0;
	($("#hdnWwdata1").val().length);
	for (var k = 0; k < 12; k++) {
		if (pdate == "") {
			pdate = $("#hdnWwdata" + (k + 1)).val().split(",").sort(
					function(x, y) {
						return parseFloat(x) - parseFloat(y)
					}).toString();
		} else {
			pdate += ":"
					+ $("#hdnWwdata" + (k + 1)).val().split(",").sort(
							function(x, y) {
								return parseFloat(x) - parseFloat(y)
							}).toString();
		}
		if (jdate == "") {
			jdate = $("#jdata" + (k + 1)).val().split(",").sort(function(x, y) {
						return parseFloat(x) - parseFloat(y)
					}).toString() + " ";
		} else {
			jdate += ":"
					+ $("#jdata" + (k + 1)).val().split(",").sort(
							function(x, y) {
								return parseFloat(x) - parseFloat(y)
							}).toString() + " ";
		}
		if (gdate == "") {
			gdate = $("#wdata" + (k + 1)).val().split(",").sort(function(x, y) {
						return parseFloat(x) - parseFloat(y)
					}).toString() + " ";
		} else {
			gdate += ":"
					+ $("#wdata" + (k + 1)).val().split(",").sort(
							function(x, y) {
								return parseFloat(x) - parseFloat(y)
							}).toString() + " ";
		}
	}
	$.ajax({
				type : "GET",
				url : "hr/work/add",
				data : {
					'pdate' : pdate,
					'jdate' : jdate,
					'gdate' : gdate,
					'years' : $("#year").val()
				},
				// data : $("#hiddenForm").serialize(),
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					// $.unblockUI();
					setTimeout("findYear()", 200);
					// Ext.CusMsg.msg('系统提示', '保存数据成功！！！');
				},
				error : function(msg) {
					// $.unblockUI();
					alert(msg);
				}
			});
};
function setStyle(val) {
	setSkin = val;
	$.blockUI({
				message : '加载中，请稍后...',
				css : {
					border : 'none',
					padding : '10px',
					backgroundColor : '#000',
					'-webkit-border-radius' : '10px',
					'-moz-border-radius' : '10px',
					opacity : .5,
					color : '#fff'
				}
			});
	// $("#radio").buttonset();
	// $("#year").val(setYear);
	$("#year option[value=" + setYear + "]").attr("selected", true);
	InitDate();
	setTimeout("InitSelect()", 2000);
};
function findYear() {
	$("#dqYear").empty();
	$("#dqYear").val($("#year").val());
	// alert($("#dqYear").val());
	$("#hiddenForm").submit();
	/*
	 * for(var k=1;k<=12;k++){ $("#month"+k).empty();
	 * $("#hdnWwdata"+k).val(""); $("#jdata"+k).val(""); $("#wdata"+k).val(""); }
	 * setYear=$("#year").val(); $.blockUI({ message : '加载中，请稍后...', css: {
	 * border: 'none', padding: '10px', backgroundColor: '#000',
	 * '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity:
	 * .5, color: '#fff' } }); for(var k=0;k<12;k++){
	 * $("#hdnWwdata"+(k+1)).val(""); $("#jdata"+(k+1)).val("");
	 * $("#wdata"+(k+1)).val(""); }; $("#year").val(setYear); $.ajax({ type:
	 * "GET", url: "hr/work/findWork", data: {'years' : setYear}, dataType :
	 * 'json', //data : $("#hiddenForm").serialize(), contentType:
	 * "application/json; charset=utf-8", success: function (data,b) {
	 * if(data.length>0){ for(var k=0;k<data.length;k++){
	 * $("#hdnWwdata"+(k+1)).val(data[k].publicDays);
	 * $("#jdata"+(k+1)).val(data[k].festivalDays);
	 * $("#wdata"+(k+1)).val(data[k].workDays); $("#dqYear").val(data[k].years); } }
	 * else { for(var k=1;k<=12;k++){ $("#hdnWwdata"+k).val("");
	 * $("#jdata"+k).val(""); $("#wdata"+k).val(""); } $("#dqYear").val(""); } },
	 * error: function (msg) { alert(msg); } }); InitDate();
	 * setTimeout("InitSelect()",2000);
	 */
};

function print() {
	$.blockUI({
				message : '加载中，请稍后...',
				css : {
					border : 'none',
					padding : '10px',
					backgroundColor : '#000',
					'-webkit-border-radius' : '10px',
					'-moz-border-radius' : '10px',
					opacity : .5,
					color : '#fff'
				}
			});
	var year = $("#dqYear").val();
	// alert(year);
	if (year != "") {
		var pdate = "";
		var jdate = "";
		var gdate = "";
		var pCount = 0;
		var jCount = 0;
		var gCount = 0;
		($("#hdnWwdata1").val().length);
		for (var k = 0; k < 12; k++) {
			if (pdate == "") {
				pdate = $("#hdnWwdata" + (k + 1)).val().split(",").sort(
						function(x, y) {
							return parseFloat(x) - parseFloat(y)
						}).toString();
			} else {
				pdate += ":"
						+ $("#hdnWwdata" + (k + 1)).val().split(",").sort(
								function(x, y) {
									return parseFloat(x) - parseFloat(y)
								}).toString();
			}
			if (jdate == "") {
				jdate = $("#jdata" + (k + 1)).val().split(",").sort(
						function(x, y) {
							return parseFloat(x) - parseFloat(y)
						}).toString()
						+ " ";
			} else {
				jdate += ":"
						+ $("#jdata" + (k + 1)).val().split(",").sort(
								function(x, y) {
									return parseFloat(x) - parseFloat(y)
								}).toString() + " ";
			}
			if (gdate == "") {
				gdate = $("#wdata" + (k + 1)).val().split(",").sort(
						function(x, y) {
							return parseFloat(x) - parseFloat(y)
						}).toString()
						+ " ";
			} else {
				gdate += ":"
						+ $("#wdata" + (k + 1)).val().split(",").sort(
								function(x, y) {
									return parseFloat(x) - parseFloat(y)
								}).toString() + " ";
			}
		}
		Ext.Ajax.request({
					url : "hr/work/checkYear",
					params : {
						years : $("#year").val()
					},
					method : 'POST',
					success : function(response) {
						var check = Ext.decode(response.responseText);
						if (check) {
							window.showModalDialog('hr/work/workReport?pdate='
									+ pdate + '&jdate=' + jdate + '&gdate='
									+ gdate + '&years=' + $("#year").val());
						} else {
							Ext.CusMsg.msg('系统提示', $("#year").val()
											+ '年工作日尚未保存，请先保存');
						}
					}
				});
		/*
		 * $.ajax({ type: "GET", url: "hr/work/checkYear", data:
		 * {'years':$("#year").val()}, //data : $("#hiddenForm").serialize(),
		 * contentType: "application/json; charset=utf-8", success: function
		 * (data) {
		 * window.showModalDialog('hr/work/workReport?pdate='+pdate+'&jdate='+jdate+'&gdate='+gdate+'&years='+$("#year").val()); },
		 * error: function (XMLHttpRequest, textStatus, errorThrown) {
		 * alert(errorThrown); } });
		 */
		// window.showModalDialog('hr/work/workReport?pdate='+pdate+'&jdate='+jdate+'&gdate='+gdate+'&years='+$("#year").val());
		$.unblockUI();
	} else {
		Ext.CusMsg.msg('系统提示', year + '年工作日尚未保存，请先保存');
		$.unblockUI();
		return;
	}
};
function dataChange() {
	var d = $("#year").val();
	$("#year").empty();
	for (var i = -5; i <= 4; i++) {
		$("#year").append("<option value='" + (parseInt(d) + i) + "'>"
				+ (parseInt(d) + i) + "</option>"); // 添加一项option
		// $("#year").prepend("<option value='1999'>1999</option>");
		// //在前面插入一项option
	}
	$("#year option[value=" + d + "]").attr("selected", true);
}