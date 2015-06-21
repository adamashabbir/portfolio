var app = angular.module('hub-on-hub', []);
(function () {
    app.controller('BioCtrl', ['$scope', function ($scope) {

        //var count = 0;
        //
        //var $nav = $('.btn');
        //var $bioNav = $('.ed');
        //var $bioUni = $('.each-uni');
        //var $bioEx = $('.experience');
        //
        //$bioEx.click(function () {
        //
        //    if (++count % 2 == 0) {
        //
        //        $bioEx
        //            .velocity('stop')
        //            .velocity({top: 75}, 1000);
        //        $bioNav
        //            .velocity('stop')
        //            .velocity("transition.slideUpOut", 1000);
        //
        //
        //    }
        //    return false;
        //});
        //
        //
        //$nav.click(function () {
        //
        //    if (++count % 2 == 1) {
        //
        //        $bioNav
        //            .velocity('stop')
        //            .velocity("transition.slideDownIn", 1000);
        //        $bioEx
        //            .velocity('stop')
        //            .velocity("transition.slideDownIn", 2000);
        //        $('.each-uni')
        //            .velocity('stop')
        //            .velocity("transition.slideUpOut", 500);
        //
        //    }
        //    return false;
        //});
        //
        //$bioNav.click(function () {
        //
        //    if (++count % 2 == 0) {
        //
        //        $bioEx
        //            .velocity('stop')
        //            .velocity("transition.slideUpOut", 500);
        //        $('.each-uni')
        //            .velocity('stop')
        //            .velocity("transition.slideDownIn", 2000);
        //
        //
        //    }
        //    return false;
        //});


        //$(window).scroll(function() {
        //    var windowWidth = $(this).width();
        //    var windowHeight = $(this).height();
        //    var windowScrollTop = $(this).scrollTop();
        //
        //
        //    var secondAnimation = function () {
        //        $('.skill:eq(0)').delay(1000).animate({opacity: 1}, 'slow');
        //    };
        //});

        //jQuery(function($) {
        //    function fixDiv() {
        //        var $cache = $('.ed');
        //        if ($(window).scrollTop() > 75){
        //            $cache.css(
        //                position: 'fixed',
        //                top: '0px',
        //                'left': '0px',
        //                'right': '0px',
        //                'z-index': '98'
        //            )
        //            //$('.bio').css({
        //            //    'display': 'none'
        //            //});
        //
        //        else
        //            $cache.css({
        //                'position': 'relative',
        //                'top': 'auto'
        //            });
        //    }
        //    $(window).scroll(fixDiv);
        //    fixDiv();
        //});

    }]);
}());

(function () {
    app.controller('BioEdCtrl', ['$scope', function ($scope) {

        $scope.education =[
            {
                "degree": "Masters",
                "uni": "New York University",
                "subject": "Interactive Technology",
                "year": "2013-2015",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"

            },
            {
                "degree": "2:1",
                "uni": "Christ Church, Oxford University",
                "subject": "Fine Art",
                "year": "2010-2013",
                "sum": "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity"
            },
            {
                "degree": "A*  A  A ",
                "uni": "Harrow School",
                "subject": "Art | Economics  Ancient History",
                "year": "2008-2010",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation"
            }
        ]

    }]);

}());
(function () {
    app.controller('BioExCtrl', ['$scope', function ($scope) {

        $scope.work =[
            {
                "img" : "public/img/logo/common-pence.png",
                "role": "founder",
                "company": "Common Pence",
                "date": "Jun 2014 - Present",
                "location": "London",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"

            },
            {
                "img" : "public/img/logo/andigital.png",
                "role": "Product Developer",
                "company": "ANDigital",
                "date": "Sep 2014 - Present",
                "location": "London",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"
            },
            {
                "img" : "public/img/logo/jwt.png",
                "role": "Intern",
                "company": "JWT",
                "date": "Jun 2013 - Aug 2013",
                "location": "London",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"
            },
            {
                "img" : "public/img/logo/amv.jpeg",
            "role": "Intern",
            "company": "AMV BBDO",
            "date": "Jun 2013 - Aug 2013",
            "location": "London",
            "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"
            },
            {
                "img" : "public/img/logo/red-bull.jpeg",
                "role": "Intern",
                "company": "Red Bull",
                "date": "Jun 2012 - Oct 2012",
                "location": "London",
                "sum" : "Zander undertook his Masters with a Fellowship Scholarship. Combining his 3D, 2D and UX design skills with technology expanded his observation for innovation. He founded ‘Common Pence' an RFID donation panel, allowing commuters to tap spare change from their oyster card to charity. Additionally, he 3D printed a wearable solar powered headband that gathers brain waves with GPS location, allowing him to design and 3D Print an emotive map of  New York City. Zander worked on technology projects spanning Digital, Mobile, Web and ew York City. Zander worked on technology projects spanning Digital, Mobile, Web and Connected Hardware"
            }
        ]

    }]);

}());
(function()
{app.controller('BioSkillCtrl', ['$scope', function($scope){


}]);
}());
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
(function(){
    app.controller('WebCtrl', ['$scope', function ($scope){

        $('.share-btn').click(function(){
            $('.share-overlay').velocity("stop").velocity("transition.slideUpIn", {  duration: 800 });
            $('.share-overlay .post-this').velocity("stop").velocity("transition.slideLeftIn", {  stagger: 250 });
            // $('.share-overlay').fadeIn(1000);

            $('.cross').click(function(){
                $('.share-overlay').velocity("stop").velocity("transition.slideDownOut", {  duration: 800 });

            });

        });

    }]);
}());