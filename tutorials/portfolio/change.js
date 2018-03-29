
$(window).scroll(function () {
    if($(window).scrollTop() > 0){
      $("video").css("display","none");
      $("img").css("display","block");
        switchImage();
    }else{

      $("video").css("display","block");
      $("img").css("display","none");
        $(window).trigger('resize');
    }
});
var image = new Array(42);
for(var i=41; i>-1; i--) {
image[i] = "1 ("  + i +  ")" + ".jpg";

}

  var breakpoint = 300;
   var index = 0;
   function switchImage() {
       var sTop = $(window).scrollTop() /image.length;
        var index = sTop > 1 ? Math.round(sTop) : 1;
       console.log( Math.round(sTop));
       index = Math.round(index) % image.length;

        $("#frame").attr("src","dist/" + image[index]);
   }
