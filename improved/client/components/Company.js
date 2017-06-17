/**
 * Created by benpurslow on 13/06/2017.
 */
const React = require('react');

import {randomInt, getStarImage} from '../../utils/utils';

export class Company extends React.Component{
    constructor(props) {
        super(props);

        let company = this._getCompany("1");

        this.state = {
            company: company
        }
    }

    render() {
        let trustpilotLogo = require('../../img/trustpilot.svg');
        return (
            <section className="widget__wrapper__rating">
                <section className="rating">
                    <img className="rating__logo" src={trustpilotLogo}/>
                    <div className="rating__companyTitle">{this.state.company.companyTitle}</div>
                    <div className="rating__score">{this.state.company.trustscore}</div>
                    <div className="rating__reviewTotal">{this.state.company.totalReviews}</div>
                    <img className="rating__stars" style={{width: "100%"}} src={getStarImage(this.state.company.starRating)}/>

                </section>
            </section>
        )
    }

    _getCompany(companyId) {
    //    Start promise to api call with company id
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
    };
    }
}

export default Company;