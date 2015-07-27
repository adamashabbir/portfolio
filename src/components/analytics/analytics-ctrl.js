(function () {


    var GAEvents = [
        ['.bio-jump', 'Bio interaction', 'Bio Hero'],
        ['.project-jump', 'Project interaction', 'Project Hero'],
        ['.press-jump', 'Press interaction', 'Press Hero'],
        ['.collaborate-jump', 'Collaborate interaction', 'Collaborate Hero'],
        ['.menu-btn', 'Menu interaction', 'Menu Btn'],
        ['.twitter-foot', 'Twitter interaction', 'Twitter Footer'],
        ['.linked-foot', 'Linked Interaction', 'Linked footer'],
        ['.github-foot', 'Git Interaction', 'Git Footer'],
        ['.email-foot', 'Email Interaction', 'Email Footer'],
        ['.slider-nav', 'Project Nav', 'Carousel Nav'],
        ['.project-site', 'Project View', 'Project View']
    ];


    for (var i in GAEvents) {
        setGAAnalyticsEvent(GAEvents[i]);
    }

    function setGAAnalyticsEvent(array) {
        $(document).on('click', array[0], function () {
            console.log(array);
            ga('send', 'event', array[1], array[2]);
        });
    }

    console.log(GAEvents);
}());