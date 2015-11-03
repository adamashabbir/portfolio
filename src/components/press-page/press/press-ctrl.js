(function () {
    app.controller('PressCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.press-title').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.press-line').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.press-pack').velocity("stop").velocity("transition.slideLeftBigIn", {duration: 2000});

        });



    }]);
}());