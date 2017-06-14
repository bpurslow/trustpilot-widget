'use strict';

$(function init() {
    var widget_wrapper_rating = $('.widget__wrapper__rating');

    // Fake API call, get company
    generate_company(widget_wrapper_rating);

    // Trigger ellipsis on company title
    $(".rating__companyTitle").dotdotdot({
        height: 30
    });

    widget_wrapper_rating.click(function (e) {
        // On click handle the widgets transitions and generate reviews
        handle_widget();
    });
});

function handle_widget() {
    /**
     * Handle widget interaction
     * Handle Loading
     * Gather reviews and display
     */

    var widget__wrapper = $('.widget__wrapper');
    var reviews__wrapper = $('.reviews');

    if (widget__wrapper.hasClass('collapsing')) {
        widget__wrapper.removeClass('collapsing');
    } else if (widget__wrapper.hasClass('collapsed')) {
        widget__wrapper.addClass('collapsing');
        widget__wrapper.removeClass('collapsed');
        widget__wrapper.one("transitionend", function (e) {
            $(this).off(e);
            widget__wrapper.removeClass("collapsing");
        });
    } else {
        widget__wrapper.addClass("collapsing");
        widget__wrapper.one("transitionend", function (e) {
            $(this).off(e);
            widget__wrapper.removeClass("collapsing");
            widget__wrapper.addClass("collapsed");
            load(reviews__wrapper);
            generate_reviews().done(function (resolve) {
                detach_load(reviews__wrapper);
                reviews__wrapper.addClass('dataLoaded');
                $('.review').click(function (e) {
                    expand_review($(this));
                });
                $(".review__title").dotdotdot({
                    height: 30
                });
            });
        });
    }
}

function expand_review(clicked_review) {
    /**
     * Handle the expansion of reviews
     */
    $(".review").removeClass("active");
    clicked_review.addClass("active");
}
