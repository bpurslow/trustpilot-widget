/**
 * Created by benpurslow on 13/06/2017.
 */
const React = require('react');

import {getStarImage} from '../utils/utils';
import {getCompany} from '../services/Company';


export class Company extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            company: {}
        }
    }

    componentDidMount() {
        this.setState({company: getCompany()});
    }

    render() {
        let trustpilotLogo = require('../img/trustpilot.svg');
        return (
            <section className="widget__wrapper__rating">
                <section className="rating">
                    <img className="rating__logo" src={trustpilotLogo}/>
                    <div className="rating__companyTitle">{this.state.company.companyTitle}</div>
                    <div className="rating__score">{this.state.company.trustscore}</div>
                    <div className="rating__reviewTotal">Based on {this.state.company.totalReviews} Reviews</div>
                    <img className="rating__stars" style={{width: "100%"}} src={getStarImage(this.state.company.starRating)}/>
                </section>
            </section>
        )
    }
}

export default Company;
