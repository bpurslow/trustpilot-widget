/**
 * Created by benpurslow on 21/06/2017.
 */

//Core Imports
const React = require('react');


export class AddReview extends React.Component {
    render() {
        return (
            <section className={this.props.className} onClick={this.props.onClick}>
                Leave Review
            </section>
        )
    }
}
