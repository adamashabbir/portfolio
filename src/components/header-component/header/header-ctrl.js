(function(){
   app.controller('HeaderCtrl', ['$scope', function ($scope){


      var showing = false;


      $(window).scroll(function () {
         console.log('currentHeight', $(this).scrollTop());
         var height = $(this).scrollTop();

         if (height > 450 && !showing) {
            $('.header').css("background", "rgba(0,0,0,.5)");
            showing=true;
         }
         else if (height < 450 && showing) {
            $('.header').css("background", "none");
            showing=false;
         }
      });
   }]);
}());
