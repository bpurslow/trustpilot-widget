/**
 * Created by benpurslow on 21/06/2017.
 */

//Core Imports
const React = require('react');


export class ActionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="actions">
                <button className="actions__addReview">
                    Leave Review
                </button>
            </section>
        )

    }


}