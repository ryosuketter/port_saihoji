// 英語版 reserveページのアコーディオン
$(function() {

  $(".js-Accordion").on('click',function(){
   var $answer = $(this).next(".answer")
   var $plus_minus = $(this).find(".plus-minus")

   if( $answer.hasClass("open") ){
     $answer.removeClass("open");
     $answer.slideUp();

     $plus_minus.removeClass('minus');

   } else {
     $answer.addClass("open");
     $answer.slideDown();

     $plus_minus.addClass('minus');
   }
 });
});
