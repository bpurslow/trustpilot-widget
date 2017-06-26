/**
 * Created by benpurslow on 13/06/2017.
 */
import {getTrustpilotData} from './Generic';


export function getCompany(name = "trustpilot.com") {
    const args = {
        "api_path": "business-units/find",
        "params": {
            "name": name
        }
    };
    return getTrustpilotData(args)
        .then( function(response) {
            return response.id;
        })
        .catch(function (error) {
            // TODO: getCompany: better error handling needed...
            console.log("getCompanyFailed");
            return "boom";
        });
}


export function getCompanyData(companyId){
    const args = {
        "api_path": "business-units/" + companyId
    };
    return getTrustpilotData(args)
        .then((data) => {
            return _parseCompanyData(data);
        })
        .catch((error) => {
            // TODO: getCompanyData: etter error handling needed...
            console.log("getCompanyDataFailed");
            return "boom";
        });
}


function _parseCompanyData(company) {
        const company_title = company.displayName;
        const trustscore = company.trustScore;
        const totalReviews = company.numberOfReviews.total;
        const starRating = company.stars;

        return {
            "companyTitle": company_title,
            "trustscore": trustscore,
            "totalReviews": totalReviews,
            "starRating": starRating
        }
}
