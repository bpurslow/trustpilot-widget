const React = require('react');
const moment = require('moment');
const _ = require('lodash');

require('../sass/main.scss');

import {ReviewContainer} from './ReviewContainer';
import {Company} from './Company';

class Widget  extends React.Component{
    constructor(props) {
        super(props);

        let date = moment();

        this.state = {
            open: false
        };
    }

    handleClick() {
        this.state.open = this.setState({open: !this.state.open});
    }

    isActive() {
        let widgetState = "";
        if (this.state.open === true) {
            widgetState = " collapsed"
        }
        return `widget__wrapper${widgetState}`;
    }

    render() {
        return (
            <section className={this.isActive()} onClick={(e) => this.handleClick(e)}>
                <Company/>
                {this.state.open ? <ReviewContainer/>: null}
            </section>
        )
    }
}

export default Widget;