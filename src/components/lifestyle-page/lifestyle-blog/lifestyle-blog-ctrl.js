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
