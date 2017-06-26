/**
 * Created by benpurslow on 11/06/2017.
 */

import {getTrustpilotData, postTrustpilotData} from './Generic';

export function addReview(review) {
    postTrustpilotData
}

export function getReviews(companyId) {
    /**
     * Call to fake api
     * Get response and parse
     * number_of_reviews: Int to determine number of fake reviews
     */
    const args = {
        "api_path": "business-units/" + companyId + "/reviews",
        "params" : {
            "perPage": "5"
        }
    };

    getTrustpilotData(args)
        .then((data) => {
            return data.reviews;
        })
        .then((reviews_data) => {

            const reviews = reviews_data.map((review, index) => (
                parseReview(review, index)
            ));

            return(reviews);
        });
}

function parseReview(review, index) {

    const consumer = review.consumer;
    const body = review.text;
    const title = review.title;
    const stars = review.stars;
    const reply = review.companyReply || "";

    return {
        "id": index + 1,
        "fullName": consumer.displayName,
        "reviewTitle": title,
        "reviewBody": body,
        "reviewStars": stars,
        "reviewReply": reply.text
    };
}
