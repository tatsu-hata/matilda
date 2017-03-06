//共通部分
(function($) {
$(function(){
	var imgNum = 0;						//画像の枚数
	var dispNo = 0;						//現在の画像
	var topFlag = 0;					//二重押下防止フラグ
	var topSpeed = 1000;				//移動速度
	var topTime = 6000;					//タイマー時間
	
    //画像サイズ取得
    hsize = $(window).height();
    wsize = $(window).width();
    
    //css 書換
    header_height = wsize * 0.18;       //ヘッダー 高さ
    if (header_height > 180) {
        header_height = 180;
    }
    top_slide_height = 900 / 1440 * wsize;  //top スライド高さ
    map_haight = hsize / 2;             //infoマップエリア 高さ
    $(".header").css({
        "height": header_height + "px"
    });
    header_height = header_height + 20;
    $(".content").css({
        "padding-top": header_height + "px"
    });
    $(".top_slide_list li div img").css({
        "width": wsize + "px"
    });
    $("#top_slide").css({
        "height": top_slide_height + "px"
    });
    $(".info_map").css({
        "height": map_haight + "px"
    });
});

})(jQuery);
