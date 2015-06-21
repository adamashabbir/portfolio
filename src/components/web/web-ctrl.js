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