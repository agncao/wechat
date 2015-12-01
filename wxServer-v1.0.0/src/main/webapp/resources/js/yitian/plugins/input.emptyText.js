//--------------以下：输入提示框特效----------------
$(function(){
	$("input[emptyText]").each(function(i,ele){
		$(this).emptyText();
	});
});

//caojm2015/01/20
function focus() {
	var $this = $(this);
	if ($this.val() == $this.attr("emptyText")) {
		$this.val('');
		$this.css("color", "#000");
	}
}
function blur() {
	var $this = $(this);
	if ($this.val() == '') {
		$this.val($this.attr("emptyText"));
		$this.css("color", "#999");
	}
}
jQuery.fn.emptyText = function() {
	this.each(function() {
		tip =  $(this).attr("emptyText");
		if (tip != '') {
			if ( $(this).val() == '') {
				 $(this).val(tip);
				 $(this).css("color", "#999");
			}
			 $(this).focus(focus);
			 $(this).blur(blur);
		}
	});
}

//--------------以上：输入提示框特效----------------