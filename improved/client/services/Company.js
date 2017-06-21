/**
 * Created by benpurslow on 13/06/2017.
 */
import {getTrustpilotData} from '../utils/utils.js';


export function getCompany(name = "trustpilot.com") {

    return new Promise((resolve, reject) => {
        let args = {
            "api_path": "business-units/find",
            "params": {
                "name": name
            }
        };
        getTrustpilotData(args)
            .then(function (response) {
                resolve(response.id);
            })
            .catch(function (error) {
                console.log("getCompanyFailed");
                reject("boom");
            });
    });
}


export function getCompanyData(companyId){

    return new Promise((resolve, reject) => {

        let args = {
            "api_path": "business-units/" + companyId
        };

        getTrustpilotData(args)
            .then( function(data) {

                resolve(_parseCompanyData(data));
            })
            .catch( function (error) {
                console.log("getCompanyDataFailed");
                reject("boom");
            });
        });
}


function _parseCompanyData(company) {
        let company_title = company.displayName;
        let trustscore = company.trustScore;
        let totalReviews = company.numberOfReviews.total;
        let starRating = company.stars;

        return {
            "companyTitle": company_title,
            "trustscore": trustscore,
            "totalReviews": totalReviews,
            "starRating": starRating
        }
}
