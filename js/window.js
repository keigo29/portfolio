var baseW = 768;	//基準となるブレークポイント
var iOSviewportW = 0;
var ua = navigator.userAgent.toLowerCase();
var isiOS = (ua.indexOf("iphone") > -1) || (ua.indexOf("ipod") > -1) || (ua.indexOf("ipad") > -1);
if(isiOS){
    iOSviewportW = document.documentElement.clientWidth;
}
function updateMetaViewport(){
    var viewportContent;
    var w = window.outerWidth;
    if(isiOS){
        w = iOSviewportW;
    }
    if(baseW < w){
        viewportContent = "width=1050px,user-scalable=yes,shrink-to-fit=yes";
    }else{
        viewportContent = "width=device-width,user-scalable=yes,shrink-to-fit=yes";
    }
    document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}
//イベントハンドラ登録
window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);
//初回イベント強制発動
var ev = document.createEvent("UIEvent");
ev.initEvent("resize", true, true)
window.dispatchEvent(ev);