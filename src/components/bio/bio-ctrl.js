(function(){
    app.controller('BioCtrl', ['$scope', function($scope){

        $(document).ready(function(){
            $('.bio-tag-01').velocity('stop').velocity("transition.shrinkIn", {duration: 1000});
        });


    }]);
}());