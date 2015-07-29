(function()
{app.controller('BioSkillCtrl', ['$scope', function($scope){


    var win = $(window).height();

    if (win > 741){
        $('.skill').velocity('stop').velocity("transition.slideLeftIn", {duration: 800});
    }

}]);
}());