/**
 * Created by benpurslow on 21/06/2017.
 */

//Core Imports
const React = require('react');

//Action Imports
import {AddReview} from './AddReview';

//Review Imports
import {ReviewForm} from '../Reviews/ReviewForm';


export class ActionsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addReviewActive : false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleAddReviewClick = this.handleAddReviewClick.bind(this);
        this.handleReviewFormClose = this.handleReviewFormClose.bind(this);
        this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
    }

    handleClick(e) {
        // Workaround for widget-wide onClick
        e.stopPropagation();
    }

    handleAddReviewClick(e) {
        e.stopPropagation();
        this.props.onActive(true);
        this.setState({addReviewActive: true});
    }

    handleReviewFormClose(e) {
        e.stopPropagation();
        this.props.onActive(false);
        this.setState({addReviewActive: false});
    }

    validateForm(form) {
        // TODO: validation here
        return false;
    }

    handleReviewFormSubmit(e) {
        e.stopPropagation();
        const validated = this.validateForm(this.reviewForm.state);
        if (validated) {
            this.props.onReviewAdded(this.reviewForm.state);
            this.setState({addReviewActive: false});
            this.props.onActive(false);
        } else {
            this.reviewForm.setState({
                validationFailed: true
            })
        }

    }

    render() {

        return (
            <section className="actions" onClick={this.handleClick}>
                { this.state.addReviewActive ?
                    <ReviewForm className="actions__reviewForm" ref={(reviewForm) => {this.reviewForm = reviewForm;}}
                                onClose={this.handleReviewFormClose}
                                onSubmit={this.handleReviewFormSubmit}/>
                    :
                    <AddReview className="actions__addReview" onClick={this.handleAddReviewClick}/>
                }
            </section>
        )

    }


}