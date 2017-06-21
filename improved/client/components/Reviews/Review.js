/**
 * Created by benpurslow on 13/06/2017.
 */

//Core Imports
const React = require('react');

//Util Functions
import {getStarImage} from '../../utils/utils';


export default class Review extends React.Component {
    constructor(props) {
        super(props);

        // Bind this to click event
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //Stops the click from triggering the widget open/close process
        e.stopPropagation();
        //Triggers parent function to deal with active state
        this.props.onActive(this.props.review.id);
    }

    render() {
        return (
            //If this instance of component is active, set active state for CSS
            <section className={this.props.active ? "review active": "review"} onClick={this.handleClick}>
                <section className="review__wrapper">
                    <div className="review__title">
                        {this.props.review.reviewTitle}
                    </div>
                    <div className="review__name">
                        {this.props.review.fullName}
                    </div>
                    <div className="review__stars">
                        <img className="review__stars__image" src={getStarImage(this.props.review.reviewStars)}/>
                    </div>
                    <div className="review__body">
                        {this.props.review.reviewBody}
                    </div>
                    {/*If there is a reply from company, display; else, empty*/}
                    {
                        this.props.review.reviewReply ?
                            <div className="review__reply">
                                <div className="review__reply__title">
                                    Reply from company
                                </div>
                                <div className="review__reply__body">
                                    {this.props.review.reviewReply}
                                </div>
                            </div>
                        :null
                    }
                </section>
            </section>
        )
    }
}
