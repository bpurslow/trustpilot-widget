/**
 * Created by benpurslow on 13/06/2017.
 */
const React = require('react');

import {getStarImage} from '../utils/utils';
import {getCompanyData} from '../services/Company';


export class Company extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            company: {},
            loading: true
        }
    }

    componentDidMount() {
        if (this.props.companyId !== "") {
            let self = this;
            getCompanyData(this.props.companyId).then( function (company) {
                self.setState({company: company, loading: false});
            });
        }
    }

    render() {
        let trustpilotLogo = require('../img/trustpilot.svg');

        return (
            <section className="company">
                <section className="company">
                    <img className="company__trustpilotLogo" src={trustpilotLogo}/>
                    <div className="company__title">{this.state.company.companyTitle}</div>
                    <div className="company__score">{this.state.company.trustscore}</div>
                    <div className="company__reviewTotal">Based on {this.state.company.totalReviews} Reviews</div>
                    <img className="company__stars" style={{width: "100%"}} src={getStarImage(this.state.company.starRating)}/>
                </section>
            </section>
        )
    }
}

export default Company;
