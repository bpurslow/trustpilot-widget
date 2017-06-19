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
            reviewName: props.review.fullName,
            reviewStars: props.review.reviewStars,
            reviewBody: props.review.reviewBody,
            reviewReply: props.review.reviewReply,
            open: false
        }
    }

    handleClick(e) {
        e.stopPropagation();
        this.state.open = this.setState({open: !this.state.open});
    }

    isActive() {
        let reviewState = "";
        if (this.state.open === true) {
            reviewState = " active"
        }
        return `review${reviewState}`;
    }

    render() {
        return (
            <section className={this.isActive()} onClick={(e) => this.handleClick(e)}>
                <section className="review__wrapper">
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
                    {
                        this.state.reviewReply ?
                            <div className="review__reply">
                                <div className="review__reply__title">
                                    Reply from company
                                </div>
                                <div className="review__reply__body">
                                    {this.state.reviewReply}
                                </div>
                            </div>
                        :
                            null
                    }
                </section>
            </section>
        )
    }
}