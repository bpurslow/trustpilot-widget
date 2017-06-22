/**
 * Created by benpurslow on 21/06/2017.
 */

//Core Imports
const React = require('react');

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            reviewStars: "",
            reviewTitle: "",
            reviewBody: "",
            validationFailed: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleClick(starRating) {
        this.setState({
            reviewStars: starRating
        })
    }

    render() {
        return (
            <form className={this.props.className} onSubmit={this.handleSubmit}>
                <section className="reviewForm__title" onClick={this.props.onClose}>Leave Review</section>
                { this.state.validationFailed ?  <section className="reviewForm__error">Validation Failed! What did you do now?</section> : null}
                <label className="reviewForm__label">
                    Your Name:
                    <input name="fullName" className="reviewForm__input" type="text"
                           value={this.state.fullName} onChange={this.handleInputChange}/>
                </label>
                {/*
                Obviously star rating should be captured in some sort of interactive star picker but simple form field for now
                */}
                <label className="reviewForm__label">
                    Star Rating:
                    <section className="starSelector">
                        <section name="reviewStars" className="starSelector__one" onClick={this.handleClick.bind(this, 1)}/>
                        <section name="reviewStars" className="starSelector__two" onClick={this.handleClick.bind(this, 2)}/>
                        <section name="reviewStars" className="starSelector__three" onClick={this.handleClick.bind(this, 3)}/>
                        <section name="reviewStars" className="starSelector__four" onClick={this.handleClick.bind(this, 4)}/>
                        <section name="reviewStars" className="starSelector__five" onClick={this.handleClick.bind(this, 5)}/>
                    </section>
                </label>
                <label className="reviewForm__label">
                    Review Title:
                    <input name="reviewTitle" className="reviewForm__input" type="text"
                           value={this.state.reviewTitle} onChange={this.handleInputChange}/>
                </label>
                <label className="reviewForm__label">
                    Your Review:
                    <textarea name="reviewBody" className="reviewForm__input" type="text"
                              value={this.state.reviewBody}  onChange={this.handleInputChange}/>
                </label>
                <section className="reviewForm__actions">
                  <input className="reviewForm__actions__cancel" type="cancel" defaultValue="Cancel"
                         onClick={this.props.onClose}/>
                  <input className="reviewForm__actions__submit" defaultValue="Post"
                         onClick={this.props.onSubmit}/>
                </section>
            </form>
        )
    }
}