(function (){
    app.controller('HeaderCtrl', ['$scope', function($scope){

        $(function(){
            $('.img-fade:gt(0)').hide();
            setInterval(function(){
                    $('.img-fade:first-child').fadeOut()
                        .next('.img-fade').fadeIn()
                        .end().appendTo('.hub-hero-img');},
                5000);
        });

        $(function(){
           $('.tag:gt(0)').hide();
            setInterval(function(){
                $('.tag:first-child').fadeOut()
                    .next('.tag').fadeIn()
                    .end().appendTo('.hub-hero-txt');},
                5000);
        });


        //$('.tag')
        //    .velocity("fadeIn", { duration: 2000, loop: true  })
        //    .velocity("fadeOut", { delay: 1000, duration: 2000, loop: true  });
        //$('.tag-01')
        //    .velocity("fadeIn", {  delay:5000, duration: 2000, loop: true  })
        //    .velocity("fadeOut", { delay: 1000, duration: 2000, loop: true  });
        //$('.tag-02')
        //    .velocity("fadeIn", {  delay:10000, duration: 2000, loop: true  })
        //    .velocity("fadeOut", { delay: 1000, duration: 2000, loop: true  });


    }]);
}());