/**
 * Created by benpurslow on 21/06/2017.
 */

//Core Imports
const React = require('react');

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            starRating: "",
            reviewTitle: "",
            reviewBody: ""
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


    render() {
        return (
          <form className={this.props.className} onSubmit={this.handleSubmit}>
              <section className="reviewForm__title" onClick={this.props.onClose}>Leave Review</section>
              <label className="reviewForm__label">
                  Your Name:
                <input name="name" className="reviewForm__input" type="text"
                       value={this.state.name} onChange={this.handleInputChange}/>
              </label>
              <label className="reviewForm__label">
                  Star Rating:
                <input name="starRating" className="reviewForm__input" type="text"
                       value={this.state.starRating} onChange={this.handleInputChange}/>
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