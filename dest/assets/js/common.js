// openingページのみ どこクリックしても隠された要素が出てくる
$(function(){
  $('.opening-Mv_Wrapper').on('click', function() {
    $(".opening_fadein").addClass('click_anime_out');
  });
});


// ページトップへ戻る
// $(function(){
//   $('.st-PageTop').click(function () {
//     //id名#pagetopがクリックされたら、以下の処理を実行
//     $("html,body").animate({scrollTop:0},"300");
//   });
// });


// infoページのみ スムーススクロール
// 参考：http://hacknote.jp/archives/18569/
// 参考：http://phiary.me/jquery-animate-page-top-smooth-scroll-button/
$(function() {
  // スクロールのオフセット値
  var offsetY = -78;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^="#"]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});


// プラグインなしでページ遷移時にフェードイン・アウトさせる方法
// 参考：https://digipress.digi-state.com/tech/page-transition-effect-how-to/
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      // $('body').css('right', '100%');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 100);
    }
    return false;
  });
});

$(window).on('load', function(){
  $('body').removeClass('fadeout');

  var windowWidth = $(window).width();

  // console.log(windowWidth);

  if(windowWidth > 1024) {
    $(".st-Mv").css('opacity', '1');
    $(".st-Header_Wrapper").css('opacity', '1');

    // $(".st-Mv_PageTopLine").delay("1000").css('heiht', '53px');
    // $(".st-Mv_TitleFirst").delay("4000").css('opacity', '0');
    // $(".st-Mv_PageTopFirst").delay("4000").css('opacity', '0');
  } else {
    // $(".st-Mv_Title").css('opacity', '1');
    $(".st-Mv").css('opacity', '1');
    $(".st-Header_Wrapper").css('opacity', '1');
    $(".st-Mv_TitleFirst").css('opacity', '0');
  }
});

$(function(){
  var windowWidth = $(window).width();

  if(windowWidth > 1024) {
    setTimeout(function(){
        $(".st-Mv_Title")
        .css('opacity', '1')
        .addClass('st-Mv_TitleFade');
    },2000);
    } else {
      setTimeout(function(){
          $(".st-Mv_Title")
          .css('opacity', '1')
          .addClass('st-Mv_TitleFade');
      },500);
  }
});

$(function(){
  var windowWidth = $(window).width();

  if(windowWidth > 1024) {
    setTimeout(function(){
        $(".reserve-Mv_Title")
        .css('opacity', '1')
        .addClass('reserve-Mv_TitleFade');
    },2000);
    } else {
      setTimeout(function(){
          $(".reserve-Mv_Title")
          .css('opacity', '1')
          .addClass('reserve-Mv_TitleFade');
      },500);
  }
});
