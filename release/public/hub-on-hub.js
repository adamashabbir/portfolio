var app = angular.module('hub-on-hub', []);
(function () {


    var GAEvents = [
        ['.bio-jump', 'Bio interaction', 'Bio Hero'],
        ['.project-jump', 'Project interaction', 'Project Hero'],
        ['.press-jump', 'Press interaction', 'Press Hero'],
        ['.collaborate-jump', 'Collaborate interaction', 'Collaborate Hero'],
        ['.menu-btn', 'Menu interaction', 'Menu Btn'],
        ['.twitter-foot', 'Twitter interaction', 'Twitter Footer'],
        ['.linked-foot', 'Linked Interaction', 'Linked footer'],
        ['.github-foot', 'Git Interaction', 'Git Footer'],
        ['.email-foot', 'Email Interaction', 'Email Footer'],
        ['.slider-nav', 'Project Nav', 'Carousel Nav'],
        ['.project-site', 'Project View', 'Project View']
    ];


    for (var i in GAEvents) {
        setGAAnalyticsEvent(GAEvents[i]);
    }

    function setGAAnalyticsEvent(array) {
        $(document).on('click', array[0], function () {
            console.log(array);
            ga('send', 'event', array[1], array[2]);
        });
    }

    console.log(GAEvents);
}());
(function(){
    app.controller('BioCtrl', ['$scope', function($scope){

        $(document).ready(function(){
            $('.bio-tag-01').velocity('stop').velocity("transition.shrinkIn", {duration: 1000});
        });


    }]);
}());
(function(){
    app.controller('BioEdCtrl', ['$scope', function($scope){




    }]);
}());
(function()
{app.controller('BioSkillCtrl', ['$scope', function($scope){


    var win = $(window).height();

    if (win > 741){
        $('.skill').velocity('stop').velocity("transition.slideLeftIn", {duration: 800});
    }

}]);
}());
(function () {
    app.controller('ColCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.collaborate-link').velocity("stop").velocity("transition.perspectiveDownIn", {duration: 800});
        });



    }]);
}());
(function(){
   app.controller('HeaderCtrl', ['$scope', function ($scope){

   }]);
}());

(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.tag').velocity("stop").velocity("transition.slideUpBigIn", {duration: 800});
            $('.about').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1000});
            $('.jump').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});

        });



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
                $('.menu-nav .tabs').velocity("stop").velocity("transition.slideLeftIn",{stagger: 100});
                $('.menu-nav .social').velocity("stop").velocity("transition.bounceUpIn",{stagger: 600});
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
(function(){
    app.controller('ProjectShowCtrl', ['$scope', function($scope){

        if ('.item active'){
            $('.image').velocity('stop').velocity('transition.slideLeftIn', {duration: 800});
            $('.text-box').velocity('stop').velocity('transition.slideLeftIn', {duration: 800});
        }

    }]);
}());