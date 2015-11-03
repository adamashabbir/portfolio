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