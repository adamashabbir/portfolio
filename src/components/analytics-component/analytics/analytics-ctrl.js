(function () {


    var GAEvents = [
        ['.hero-main-p', 'hero-main-button', 'home hero button'],
        ['.hero-p', 'hero-trio-button', 'home trio button'],
        ['.podcast-backdrop', 'podcast-small', 'podcast small'],
        ['.product-backdrop', 'product-small', 'product-small'],
        ['.post-backdrop', 'post-small', 'post-small'],
        ['.code-banner-join', 'code-lounge-button', 'code-lounge button'],
        ['.header-tabs', 'header-tabs', 'header tabs'],
        ['.menu-btn', 'burger-menu', 'burger menu'],
        ['.tabs', 'burger-menu-tabs', 'burger menu tabs'],
        ['.social-icons', 'burger-menu-social', 'burger menu social icons'],
        ['.podcast-p', 'podcast-hero-button', 'podcast hero button'],
        ['.podcast-back', 'podcast-person', 'podcast-person'],
        ['.lifestyle-p', 'lifestyle-hero-button', 'lifestyle hero button'],
        ['.blog-post-backdrop', 'blog-post', 'lifestyle hero button'],
        ['.social-foot', 'social-icon-footer', 'social icons footer'],
        ['.blog-p', 'blog-button-header', 'blog button hero'],
        ['.get-reading', 'blog-button-post', 'blog button post'],
        ['.social-icon', 'blog-social-media-share', 'blog social media share'],
        ['.subscribe-btn', 'email-subscribe-button', 'email subscribe button'],
        ['.subscribe-btn-health', 'email-subscribe-button-health', 'email subscribe button health'],
        ['.subscribe-btn-podcast', 'email-subscribe-button-podcast', 'email subscribe button podcast'],
        ['.lifestyle-p', 'lifestyle-hero-button', 'lifestyle hero button'],
        ['.mini-tabs', 'tablet-mobile-tabs', 'tablet mobile tabs'],
        ['.download', 'download-button', 'download button']



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