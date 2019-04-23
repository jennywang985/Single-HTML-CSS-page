/***navbar hide when click other element***/
$(window).scroll(function () {
  if ($(window).width() < 767) {
     $("#tabs a").click(function () {
	      $("#tabs").collapse('hide');
	     });

    $(window).scroll(function () {
      $("#tabs").collapse('hide');
     });
   }
 });

 