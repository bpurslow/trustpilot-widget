/**
 * Created by benpurslow on 29/05/2017.
 */

function generate_company(wrapper) {
    /**
     * Fake Function to create a fake company
     * Wrapper: Fake company is appended to this
     */
    const company = get_company_data('apiv1/fake/companydata/company_id_here');

    let company_title = company['companyTitle'];
    let trustscore = company['trustscore'];
    let total_reviews = company['totalReviews'];
    let star_rating = company['starRating'];

    wrapper.append(`
        <div class="rating">
            <img class="rating__logo" src="img/trustpilot.svg">
            <div class="rating__companyTitle">
                `+ company_title +`
            </div>
            <div class="rating__score">
                `+ trustscore +`
            </div>
            <div class="rating__reviewTotal">
                Based on `+ total_reviews +` Reviews
            </div>
            <img class="rating__stars" src="img/`+ star_rating +`-stars-260x48.png">
        </div>
    `);
}


function generate_reviews() {
    /**
     * Fake Function to create fake reviews
     */

    let review_promise = $.Deferred();

    // Start our fake wait for an api response
    sleep(2000).then(function () {
    /**
     *  Ideally I would get this directly from http://followthewhiterabbit.trustpilot.com/fe/ressources/reviews.json
     *  I had some ajax calls setup to collect the data but just couldn't get it working.
     */
    let reviews = get_review_data("http://followthewhiterabbit.trustpilot.com/fe/ressources/reviews.json", 10);

    // Loop through our "API response" and generate the HTML
    $.each(reviews, function(index, review) {
       // Unused
       const first_name = review['firstName'];
       const last_name = review['lastName'];

       // Review components
       const full_name = review['fullName'];
       const location = review['location'];
       const review_title = review['reviewTitle'];
       const review_body= review['reviewBody'];
       const review_reply= review['reviewReply'];
       const star_rating = review['starRating'];

       let review_reply_html = '';

       if (review_reply !== undefined) {
       // If we have a reply, create the HTML for it
           review_reply_html = `
                <div class="review__reply">
                    <div class="review__reply__title">
                        Reply from company
                    </div>
                    <div class="review__reply__body">
                        `+ review_reply + `
                    </div>
                </div>
            `;
       }

       // Append review to end of current reviews
       $('.reviews').append(`
            <div class="review">
                <div class="review__wrapper">
                    <div class="review__title">
                        ` + review_title + `
                    </div>
                    <div class="review__name">
                        ` + full_name + `
                    </div>
                    <div class="review__stars">
                        <img class="review__stars__image" src="img/`+ star_rating +`-stars-260x48.png">
                    </div>
                    <div class="review__body">
                        ` + review_body + `
                    </div>
                    ` + review_reply_html + `
                </div>
        </div>
       `);


    });

    //Resolve promise to stop loader
    review_promise.resolve();

    }).catch( function (e) {
        console.log('Boom, backend done goofed');
        $('.reviews').append(`
            <div class="error">
                <p>Go get a server person!!</p>
            </div>
        `);
        // Return a fail and deal with appropriately
        review_promise.resolve(false);
    });

    //Return the promise, continue flow
    return review_promise.promise();
}
