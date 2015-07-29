(function(){
    app.controller('ProjectShowCtrl', ['$scope', function($scope){

        if ('.item active'){
            $('.image').velocity('stop').velocity('transition.slideLeftIn', {duration: 800});
            $('.text-box').velocity('stop').velocity('transition.slideLeftIn', {duration: 800});
        }

    }]);
}());