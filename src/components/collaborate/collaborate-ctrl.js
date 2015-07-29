(function () {
    app.controller('ColCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.collaborate-link').velocity("stop").velocity("transition.perspectiveDownIn", {duration: 800});
        });



    }]);
}());