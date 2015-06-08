var app = angular.module('hub-on-hub', []);
(function(){
   app.controller('HeaderCtrl', ['$scope', function ($scope){

   }]);
}());

(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        //$scope.slide = [{
        //    "copy": "hub hotels are connected to the heart of the city",
        //    "image" : "https://unsplash.imgix.net/photo-1415829994762-1344c5d2dbe9?fit=crop&fm=jpg&h=1575&q=75&w=1050"
        //    },
        //    {
        //        "copy": "Use our hub App to enhance your stay",
        //        "image" : "https://files.slack.com/files-pri/T04HVLGHX-F052RJX9T/app_homepage_weboptimized.jpg"
        //    },
        //    {
        //        "copy": "Compact, cosy rooms",
        //        "image" : "https://download.unsplash.com/photo-1422433555807-2559a27433bd"
        //    }];

        $(".scroll-icon").click(function() {
            $('html, body').animate({
                scrollTop: $("#scroll").offset().top
            }, 1000);
        });



        //$(function () {
        //    $('.img-fade:gt(0)').hide();
        //    setInterval(function () {
        //            $('.img-fade:first-child').fadeOut()
        //                .next('.img-fade').fadeIn()
        //                .end().appendTo('.hub-hero-img');
        //        },
        //        5000);
        //});

        //function setup(){
        //    canvas = createCanvas(displayWidth, displayHeight)
        //}
        //
        //function draw() {
        //    background(0);
        //    fill(0);
        //    ellipse(width/2,height/2,100,100);
        //}



    }]);
}());

(function(){
    app.controller('HeroProjectCtrl', ['$scope', function($scope){


        $(document).ready(function () {


            $(".right-nav").velocity({translateX: 50}, {loop: true},3000);


            var fullWidth = $( window ).width();

            var n = $(".slider-slide-wrap").length,
                width = fullWidth,
                newwidth = width * n;

            $('.slide-wrap').css({
                'width': newwidth
            });

            $(".slider-slide-wrap").each(function (i) {
                var thiswid = fullWidth;
                $(this).css({
                    'left': thiswid * i
                });

            });
            /*on scroll move the indicator 'shown' class to the
             most visible slide on viewport
             */
            $('.slider-wrap').scroll(function () {
                var scrollLeft = $(this).scrollLeft();
                $(".slider-slide-wrap").each(function (i) {
                    var posLeft = $(this).position().left
                    var w = $(this).width();

                    if (scrollLeft >= posLeft && scrollLeft < posLeft + w) {
                        $(this).addClass('shown').siblings().removeClass('shown');
                    }
                });
            });
            /* on left button click scroll to the previous sibling of the current visible slide */
            $('#slider-left').click(function () {
                var $prev = $('.slide-wrap .shown').prev();

                if ($prev.length) {
                    $('.slider-wrap').animate({
                        scrollLeft: $prev.position().left
                    }, 'slow');
                }
            });
            /* on right button click scroll to the next sibling of the current visible slide */
            $('#slider-right').click(function () {
                var $next = $('.slide-wrap .shown').next();

                if ($next.length) {
                    $('.slider-wrap').animate({
                        scrollLeft: $next.position().left
                    }, 'slow');
                }
            });
        });


    }]);
}());
(function () {
    app.controller('MenuCtrl', ['$scope', function ($scope) {

        /*$(document).on("click", ".fa-bars", function () {
         $(".menu-nav").show();
         console.log("Menu Opened");
         });*/

        var count = 0;
        var $menuNav = $('.menu-nav');
        var $menuBtn = $('.fa-bars');
        var $closeBtn = $('.nav-close');


        $menuBtn.click(function () {

            if (++count % 2 == 1) {
                //#show
                $menuNav
                    .velocity('stop')
                    .velocity("transition.slideLeftIn", 500);
            }

            return false;
        });

        $closeBtn.click(function () {
            if (++count % 2 == 0) {
                $menuNav
                    .velocity('stop')
                    .velocity("transition.slideLeftOut", 300);
            }
            return false;
        });


    }]);
}());