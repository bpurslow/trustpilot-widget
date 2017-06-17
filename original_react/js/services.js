/**
 * Created by benpurslow on 01/06/2017.
 */

function get_company_data(url) {
    /**
     * Call to fake api.
     * Get response and parse
      */

    //Fake trustscore
    let trustscore = randomInt(0, 10);
    let starRating = Math.ceil(trustscore/2);

    return {
        "companyTitle": "Fake widget LTD",
        "trustscore": trustscore.toFixed(1),
        "totalReviews": "1230",
        "starRating": starRating.toString()
    };
}