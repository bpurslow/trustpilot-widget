/**
 * Created by benpurslow on 13/06/2017.
 */
const React = require('react');

import {getStarImage} from '../utils/utils';

export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewTitle: props.review.reviewTitle,
            reviewName: props.review.reviewName,
            reviewStars: props.review.reviewStars,
            reviewBody: props.review.reviewBody
        }
    }

    render() {
        return (
            <section className="review">
                <div className="review__title">
                    {this.state.reviewTitle}
                </div>
                <div className="review__name">
                    {this.state.reviewName}
                </div>
                <div className="review__stars">
                    <img className="review__stars__image" src={getStarImage(this.state.reviewStars)}/>
                </div>
                <div className="review__body">
                    {this.state.reviewBody}
                </div>

            </section>
        )
    }
}