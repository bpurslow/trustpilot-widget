/**
 * Created by benpurslow on 13/06/2017.
 */
import {randomInt} from '../utils/utils.js';


export function getCompany(companyId) {
    let company = [];

    // Start promise to api call with company id
    // Mock company data
    let company_title = "Fake Company LTD";
    let trustscore = randomInt(0, 10);
    let total_reviews = Math.floor(randomInt(1, 3000));
    let star_rating = Math.ceil(trustscore/2);

    return {
        "companyTitle": company_title,
        "trustscore": trustscore.toFixed(1),
        "totalReviews": total_reviews,
        "starRating": star_rating.toString()
    }
}
