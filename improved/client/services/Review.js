/**
 * Created by benpurslow on 11/06/2017.
 */

import {getTrustpilotData, postTrustpilotData} from './Generic';

export function addReview(review) {
    return new Promise((resolve, reject) => {

        postTrustpilotData
    });
}

export function getReviews(companyId) {
    /**
     * Call to fake api
     * Get response and parse
     * number_of_reviews: Int to determine number of fake reviews
     */
    return new Promise((resolve, reject) => {

        let args = {
            "api_path": "business-units/" + companyId + "/reviews",
            "params" : {
                "perPage": "5"
            }
        };

        getTrustpilotData(args)
            .then( function(data) {
                return data.reviews;
            })
            .then(function (reviews_data) {

                let reviews = reviews_data.map((review, index) => (
                    parseReview(review, index)
                ));

                resolve(reviews);
            });

    });
}

function parseReview(review, index) {

    let consumer = review.consumer;
    let body = review.text;
    let title = review.title;
    let stars = review.stars;
    let reply = review.companyReply || "";

    return {
        "id": index + 1,
        "fullName": consumer.displayName,
        "reviewTitle": title,
        "reviewBody": body,
        "reviewStars": stars,
        "reviewReply": reply.text
    };
}
