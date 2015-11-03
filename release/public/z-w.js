var app = angular.module('z-w', []);
(function () {


    var GAEvents = [
        ['.hero-main-p', 'hero-main-button', 'home hero button'],
        ['.hero-p', 'hero-trio-button', 'home trio button'],
        ['.podcast-backdrop', 'podcast-small', 'podcast small'],
        ['.product-backdrop', 'product-small', 'product-small'],
        ['.post-backdrop', 'post-small', 'post-small'],
        ['.code-banner-join', 'code-lounge-button', 'code-lounge button'],
        ['.header-tabs', 'header-tabs', 'header tabs'],
        ['.menu-btn', 'burger-menu', 'burger menu'],
        ['.tabs', 'burger-menu-tabs', 'burger menu tabs'],
        ['.social-icons', 'burger-menu-social', 'burger menu social icons'],
        ['.podcast-p', 'podcast-hero-button', 'podcast hero button'],
        ['.podcast-back', 'podcast-person', 'podcast-person'],
        ['.lifestyle-p', 'lifestyle-hero-button', 'lifestyle hero button'],
        ['.blog-post-backdrop', 'blog-post', 'lifestyle hero button'],
        ['.social-foot', 'social-icon-footer', 'social icons footer'],
        ['.blog-p', 'blog-button-header', 'blog button hero'],
        ['.get-reading', 'blog-button-post', 'blog button post'],
        ['.social-icon', 'blog-social-media-share', 'blog social media share'],
        ['.subscribe-btn', 'email-subscribe-button', 'email subscribe button'],
        ['.subscribe-btn-health', 'email-subscribe-button-health', 'email subscribe button health'],
        ['.subscribe-btn-podcast', 'email-subscribe-button-podcast', 'email subscribe button podcast'],
        ['.lifestyle-p', 'lifestyle-hero-button', 'lifestyle hero button'],
        ['.mini-tabs', 'tablet-mobile-tabs', 'tablet mobile tabs'],
        ['.download', 'download-button', 'download button']



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
(function () {
    app.controller('AdvertiseCtrl', ['$scope', function ($scope) {


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

        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });



    }]);
}());
(function(){
    app.controller('BioCtrl', ['$scope', function($scope){

        $(document).ready(function(){
            $('.bio-page-title').velocity('stop').velocity("transition.slideUpBigIn", {duration: 1500});
            $('.bio-underline').velocity('stop').velocity("transition.slideUpBigIn", {duration: 1500});
            $('.bio-tag-01').velocity('stop').velocity("transition.slideLeftBigIn", {duration: 2000});
            $('.z-bio-icon').velocity('stop').velocity("transition.shrinkIn", {duration: 2500});
            $('.z-bio-tag').velocity('stop').velocity("transition.slideUpBigIn", {duration: 2500});

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
    app.controller('BlogPost001Ctrl', ['$scope', function ($scope) {
        $(document).ready(function(){
      $(".social-icon").velocity("stop").velocity("callout.bounce",{stagger: 1000, loop: 5});


        });
    }]);
}());

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

(function () {
    app.controller('BlogPost003Ctrl', ['$scope', function ($scope) {
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

(function () {
    app.controller('BlogPost004Ctrl', ['$scope', function ($scope) {
        $(document).ready(function(){
      $(".social-icon").velocity("stop").velocity("callout.bounce",{stagger: 1000, loop: 5});


        });
    }]);
}());

(function () {
    app.controller('BlogPost005Ctrl', ['$scope', function ($scope) {
        $(document).ready(function(){
      $(".social-icon").velocity("stop").velocity("callout.bounce",{stagger: 1000, loop: 5});


        });
    }]);
}());

(function () {
    app.controller('BlogCtrl', ['$scope', function ($scope) {


        $(document).ready(function(){
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 1200, 'swing', function () {
                    window.location.hash = target;
                });
            });
        });

        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });



    }]);
}());
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

(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.tag').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1000});
            $('.about').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.jump').velocity("stop").velocity("transition.slideUpBigIn", {duration: 2000});

        });


        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });

    }]);
}());

(function () {
    app.controller('LifestyleBlogCtrl', ['$scope', function ($scope) {
     $("video")
            .on('mouseenter', function(){
                $(this).get(0).play();
            })
            .on('mouseleave', function(){
                $(this).get(0).pause();
            })

 /*
         $("video").hover( hoverVideo, hideVideo );

        function hoverVideo(e) {
            $(this).get().play();
        }

        function hideVideo(e) {
            $(this).get().pause();
        }*/

    }]);
}());


(function () {
    app.controller('LifestyleHeroCtrl', ['$scope', function ($scope) {

        $(document).ready(function(){
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 1200, 'swing', function () {
                    window.location.hash = target;
                });
            });
        });

        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });

      window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));



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
                    .velocity("transition.slideRightIn", 500);
                $('.menu-nav .tabs').velocity("stop").velocity("transition.slideRightIn",{stagger: 100});
                $('.menu-nav .social').velocity("stop").velocity("transition.bounceUpIn",{stagger: 600});
            }

            return false;
        });

        $closeBtn.click(function () {
            if (++count % 2 == 0) {
                $menuNav
                    .velocity('stop')
                    .velocity("transition.slideRightOut", 300);
            }
            return false;
        });


    }]);
}());
(function () {
    app.controller('PressCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.press-title').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.press-line').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.press-pack').velocity("stop").velocity("transition.slideLeftBigIn", {duration: 2000});

        });



    }]);
}());
(function () {
    app.controller('PodcastCtrl', ['$scope', function ($scope) {


        $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 300
        }, 1200, 'swing', function () {
            window.location.hash = target;
        });
    });
});

        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });

    }]);
}());
(function () {
    app.controller('ProjectPageCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.project-page-title').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.project-underline').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.project-backdrop').velocity("stop").velocity("transition.slideLeftBigIn", {duration: 2500});

        });



    }]);
}());