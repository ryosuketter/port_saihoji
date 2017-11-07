// TOPページのみ 背景画像をx秒毎に切り替える
// 参考：https://rewish.jp/blog/releases/jquery_bg_switcher
// 参考：http://fit-jp.com/bgswitcher/
// 参考：http://black-flag.net/jquery/20151117-5810.html
$(function() {

  // 画面幅の取得
  var windowWidth = $(window).width();

  // 画面幅が667（つまりSP）以下だったら
  if (windowWidth <= 667) {

    // 画像ランダム表示script
    jQuery(function($) {
        $('.top-Mv').bgSwitcher({
            images: [
              "./assets/img/top/top-mv_bgimg1sp.png",
              "./assets/img/top/top-mv_bgimg2sp.png",
              "./assets/img/top/top-mv_bgimg3sp.png",
              "./assets/img/top/top-mv_bgimg4sp.png"
            ], // 切り替える背景画像を指定します。

            interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
            duration:600, // エフェクトの時間を指定
            shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            easing: "linear" // エフェクトのイージングをlinear,swingから指定
        });
    });

  // 画面幅が667（つまりSP）以下じゃなかったら = 画面幅が667以上なら
  } else {

    // 画像ランダム表示script
    jQuery(function($) {
        $('.top-Mv').bgSwitcher({
            images: [
              "./assets/img/top/top-mv_bgimg1.png",
              "./assets/img/top/top-mv_bgimg2.png",
              "./assets/img/top/top-mv_bgimg3.png",
              "./assets/img/top/top-mv_bgimg4.png"
            ], // 切り替える背景画像を指定します。
            interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
            duration:600, // エフェクトの時間を指定
            shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            easing: "linear" // エフェクトのイージングをlinear,swingから指定
        });
    });

  }
});


// 英語ページ
$(function() {

  // 画面幅の取得
  var windowWidth = $(window).width();

  // 画面幅が667（つまりSP）以下だったら
  if (windowWidth <= 667) {

    // 画像ランダム表示script
    jQuery(function($) {
        $('.top-MvEn').bgSwitcher({
            images: [
              "../assets/img/top/top-mv_bgimg1sp.png",
              "../assets/img/top/top-mv_bgimg2sp.png",
              "../assets/img/top/top-mv_bgimg3sp.png",
              "../assets/img/top/top-mv_bgimg4sp.png"
            ], // 切り替える背景画像を指定します。

            interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
            duration:600, // エフェクトの時間を指定
            shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            easing: "linear" // エフェクトのイージングをlinear,swingから指定
        });
    });

  // 画面幅が667（つまりSP）以下じゃなかったら = 画面幅が667以上なら
  } else {

    // 画像ランダム表示script
    jQuery(function($) {
        $('.top-MvEn').bgSwitcher({
            images: [
              "../assets/img/top/top-mv_bgimg1.png",
              "../assets/img/top/top-mv_bgimg2.png",
              "../assets/img/top/top-mv_bgimg3.png",
              "../assets/img/top/top-mv_bgimg4.png"
            ], // 切り替える背景画像を指定します。
            interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
            duration:600, // エフェクトの時間を指定
            shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            easing: "linear" // エフェクトのイージングをlinear,swingから指定
        });
    });

  }
});
