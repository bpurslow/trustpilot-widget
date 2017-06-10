$(function init() {
    const reviews = $('.review');

    generate_company($(".widget__wrapper__rating"));

    const rating = $('.rating');

    rating.click(function (e) {
        handle_widget();
    })
});

function handle_widget() {
    const widget__wrapper = $('.widget__wrapper');
    const reviews__wrapper = $('.reviews');

    if (widget__wrapper.hasClass('collapsing')) {
            widget__wrapper.removeClass('collapsing');
    } else if (widget__wrapper.hasClass('collapsed')) {
        widget__wrapper.addClass('collapsing');
        widget__wrapper.removeClass('collapsed');
        widget__wrapper.one("transitionend",
             function(e){
                $(this).off(e);
                widget__wrapper.removeClass("collapsing");
             }
        );
    } else {
        widget__wrapper.addClass("collapsing");
        widget__wrapper.one("transitionend",
             function(e){
                $(this).off(e);
                widget__wrapper.removeClass("collapsing");
                widget__wrapper.addClass("collapsed");
                load(reviews__wrapper);
                generate_reviews().done( function (resolve) {
                    detach_load(reviews__wrapper);
                    reviews__wrapper.addClass('dataLoaded');
                    $('.review').click(function (e) {
                        expand_review($(this));
                    });
                    $(".review__title").dotdotdot({
                        height: 30
                    });
                })
             }
        );
    }
}

function expand_review(clicked_review) {
    $(".review").removeClass("active");
    clicked_review.addClass("active");
}
