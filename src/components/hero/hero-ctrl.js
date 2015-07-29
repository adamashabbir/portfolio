(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.tag').velocity("stop").velocity("transition.slideUpBigIn", {duration: 800});
            $('.about').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1000});
            $('.jump').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});

        });



    }]);
}());
