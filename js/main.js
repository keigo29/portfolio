// ページ内リンクの設定
jQuery(function(){
    var headerHight = 80; //ヘッダーの高さをpx指定
    //*ページ内リンクの指定
    jQuery("a[href^='#']").click(function(){
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'body' : href);
        var position = target.offset().top-headerHight;
        jQuery("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
    //*ページ外リンクの指定*/      
    var url = jQuery(location).attr('href');
    if (url.indexOf("?id=") == -1) {
    // ほかの処理
    }else{
        var url_sp = url.split("?id=");
        var hash     = '#' + url_sp[url_sp.length - 1];
        var target2 = jQuery(hash);
        var position2 = target2.offset().top-headerHight;
        jQuery("html, body").animate({scrollTop:position2}, 550, "swing");
    }
});


// ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


document.addEventListener("DOMContentLoaded", async () => {
    const API_URL = "https://keigo-portfolio.microcms.io/api/v1/works";
    const API_KEY = "QYZiGK3dbkOvEqmju12WLPBNLuY8cczgBdtB";

    try {
        const response = await fetch(API_URL, {
            headers: { "X-MICROCMS-API-KEY": API_KEY }
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const works = data.contents;
        const swiperWrapper = document.querySelector(".swiper-wrapper");

        works.forEach(work => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            const MAX_LENGTH = 90;
            const displayText = work.dis 
                ? (work.dis.length > MAX_LENGTH 
                    ? work.dis.slice(0, MAX_LENGTH) + '…' 
                    : work.dis)
                : "";
            slide.innerHTML = `
                <div class="Works__items__item">
                    <a href="https://portfolio-blog-bay-nu.vercel.app/work/${work.id}">
                        <div class="Works__items__item__head">
                            <img src="${work.eyecatch.url}" alt="${work.title}">
                        </div>
                        <h3 class="Works__items__item__ttl">${work.title}</h3>
                        <div class="Works__items__item__categoris">
                            ${work.option.map(category => `<div class="Works__items__item__categoris__categori">${category}</div>`).join('')}
                        </div>
                        <div class="Works__items__item__content">
                             ${displayText.replace(/\n/g, "<br>")}
                        </div>
                    </a>
                </div>
            `;

            swiperWrapper.appendChild(slide);
        });

        // Swiper初期化

    } catch (error) {
        console.error("Error fetching MicroCMS data:", error);
    }
});

