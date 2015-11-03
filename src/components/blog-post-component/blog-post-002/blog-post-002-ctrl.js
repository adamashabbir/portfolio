(function () {
    app.controller('BlogPost002Ctrl', ['$scope', function ($scope) {
        $(document).ready(function(){
      $(".social-icon").velocity("stop").velocity("callout.bounce",{stagger: 1000, loop: 5});


            $(document).ready(function(){
                $('a[href^="#"]').on('click',function (e) {
                    e.preventDefault();

                    var target = this.hash;
                    var $target = $(target);

                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top -125
                    }, 1200, 'swing', function () {
                        window.location.hash = target;
                    });
                });
            });
        });
    }]);
}());
