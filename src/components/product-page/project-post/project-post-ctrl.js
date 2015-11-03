(function () {
    app.controller('ProjectPageCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.project-page-title').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.project-underline').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.project-backdrop').velocity("stop").velocity("transition.slideLeftBigIn", {duration: 2500});

        });



    }]);
}());