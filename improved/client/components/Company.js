/**
 * Created by benpurslow on 13/06/2017.
 */
const React = require('react');

import {randomInt, getStarImage} from '../utils/utils';

export class Company extends React.Component{
    constructor(props) {
        super(props);

        let company = this._getCompany("1");

        this.state = {
            company: company
        }
    }

    render() {
        return (
            <section className="rating">
                <p>{this.state.company.companyTitle}</p>
                <img className="rating__stars" style={{width: "100%"}} src={getStarImage(this.state.company.starRating)}/>
                <p>{this.state.company.totalReviews}</p>
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
        "trustscore": trustscore,
        "totalReviews": total_reviews,
        "starRating": star_rating.toString()
    };
    }
}

export default Company;