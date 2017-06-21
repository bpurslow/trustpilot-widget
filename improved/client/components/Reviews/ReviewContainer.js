/**
 * Created by benpurslow on 13/06/2017.
 */

//Core Imports
const React = require('react');

//Services
import {getReviews} from '../../services/Review';

//Components
import Review from './Review';
import Loader from '../Loader';


export class ReviewContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            reviews: {},
            loading: true,
            activeReview: 0,
            content: <Loader/>
        };

        // Bind this to click event
        this.setActive = this.setActive.bind(this);
    }

    componentDidMount() {
        // Only on mount are the reviews grabbed
        let self = this;
        getReviews(this.props.companyId).then( function (reviews) {
            // This will get triggered even if the widget is closed
            // Can only think of checking to see if the widget is open or not right now...
            // Point is I KNOW THIS IS AN ISSUE I SWEAR!
            self.setState({reviews: reviews});
        }).then( function() {
            self.setState({loading: false, content: self._renderReviews(self.state.reviews)});
        })
    }

    _renderReviews(reviews) {
        if (reviews.length > 0) {
            return reviews.map((review,index) => (
                <Review
                    key={index}
                    review={review}
                    active={this.state.activeReview === review.id}
                    onActive={this.setActive}
                />
        ));
        } else {
            return <div className="review--none">No Reviews Available</div>
        }
    }

    setActive(reviewId) {
        if (reviewId === this.state.activeReview) {
            this.setState({activeReview: 0});
        } else {
            this.setState({activeReview: reviewId});
        }
    }

    render() {
        return (
            <section className="reviews">
                {this.state.loading? <Loader/>: this._renderReviews(this.state.reviews)}
            </section>
        )
    }
}
