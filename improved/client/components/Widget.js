const React = require('react');
const moment = require('moment');
const _ = require('lodash');

require('../sass/main.scss');

import {ReviewContainer} from './ReviewContainer';
import {Company} from './Company';
import {Loader} from './Loader';


class Widget  extends React.Component{
    constructor(props) {
        super(props);

        let date = moment();

        this.state = {
            open: false,
            opening: false
        };
    }

    handleClick(e) {
        if (this.state.opening === true){
            e.preventDefault();
        } else {
            this.state.opening = this.setState({opening: true});
            setTimeout(() => {
                this.state.open = this.setState({open: !this.state.open, opening: false});
            }, 1000);
        }
    }

    isActive() {
        let widgetState = "";
        if (this.state.opening === true) {
            widgetState = " collapsing"
        }
        else if (this.state.open === true) {
            widgetState = " collapsed"
        }
        return `widget__wrapper${widgetState}`;
    }

    render() {
        return (
            <section className={this.isActive()} onClick={(e) => this.handleClick(e)}>
                <Company/>
                {this.state.open || this.state.opening ? <ReviewContainer><Loader/></ReviewContainer>: null}
            </section>
        )
    }
}

export default Widget;