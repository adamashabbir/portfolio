
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
