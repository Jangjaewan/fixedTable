(function($){
    $.fn.extend({
        fixedTable: function(options) {
            var defaults = {
                scrollY : null,
                minWidth : null,
                fixedCell : null,
                scrollBody : ">.ui-scroll-table-body>.ui-scroll-content",
                fixHead : ">.ui-scroll-table-header"
			},options = $.extend(defaults, options);

            return this.each(function(){
                var
                _this = $(this),
                a = _this.find(options.scrollBody),
                b = _this.find(options.fixHead),
                c = b.find("ul"),
                d = a.find("> table"),
                e = null,
                preScroll = 0;
                if(options.scrollY){
                    if(a.parent().height() >= options.scrollY) {
                        _this.height(options.scrollY);
                        a.parent().innerHeight(_this.height());
                        c.addClass("over");
                        _this.tableResize();
                    }
                    /*
                    $(document).on("ready",function(){
                        _this.tableResize();
                    });
                    */
                }
                if(options.minWidth){
                    d.css("min-width",options.minWidth);
                    _this.tableResize();
                };
                if(options.fixedCell){
                    $(">tbody>tr:not(.toggle-content) > td:nth-child(-n+"+options.fixedCell+")",d).addClass("fixed-cell");
                    $("li:nth-child(-n+"+options.fixedCell+")",c).addClass("fixed-cell");
                    e = _this.find(".fixed-cell");
                };
                a.on("scroll",function(){
                    if(this.scrollLeft != preScroll){
                        b.scrollLeft(this.scrollLeft);
                        if(e) e.css({"transform":"translateX("+ this.scrollLeft + "px)"});
                        preScroll = this.scrollLeft;
                    }else{
                        return false
                    }
                });
                b.find("li").resizable({
                    handles: 'e',
                    helper: "ui-resizable-helper",
                    stop: function( event, ui ) {
                        var
                        idx = b.find("li").index(ui.element),
                        also = a.find("col").eq(idx),
                        wt = ui.size.width-2;
                        d.width(d.width()+(wt-ui.originalSize.width));
                        also.width(wt);
                        _this.tableResize();
                    }
                });
                $(window).on("resize",function(){
                    _this.tableResize();
                });
                $(document).on("ready",function(){
                    _this.tableResize();
                });
            })
        },
        tableResize : function(){
            return this.each(function(){
            var
                a = $(this).find(".ui-scroll-content"),
                b = a.find("table"),
                c = $(this).find(".ui-scroll-table-header ul");
                c.width(b.width());
            });
        }
    });
})(jQuery)