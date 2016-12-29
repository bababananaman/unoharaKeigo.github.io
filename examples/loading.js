$('head').append(
    '<style type="text/css">#pagepiling { display: none; } #fade, #loader { display: block; }</style>'
);
 
jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    var pageH = $("#pagepiling").height();
 
    $("#fade").css("height", pageH).delay(300).fadeOut(300);
    $("#loader").delay(0).fadeOut(0);
    $("#pagepiling").css("display", "block");
});

