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
        getReviews(this.props.companyId).then((reviews) => {
            // This will get triggered even if the widget is closed
            // Can only think of checking to see if the widget is open or not right now...
            // Point is I KNOW THIS IS AN ISSUE I SWEAR!
            this.setState({reviews: reviews});
        }).then(() => {
            // Check if object has more than 0 keys
            if(Object.keys(this.props.newReview).length !== 0){
                // Replicate reviews into a temp array
                let reviews_array = this.state.reviews;
                // Add newly created review to the start of reviews array
                reviews_array.unshift(this.props.newReview);
                // Update reviews state with the new array (same as old with new review at start)
                this.setState({
                    reviews: reviews_array
                });
                /**
                 * I have a feeling the above is highly improvable, not sure of the impact of replacing the
                 * entire state in the middle of these promises. TODO: look into effect on performance
                 */
            }
            this.setState({loading: false, content: this._renderReviews(self.state.reviews)});
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
