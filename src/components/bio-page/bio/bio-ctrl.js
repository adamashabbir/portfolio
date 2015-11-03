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