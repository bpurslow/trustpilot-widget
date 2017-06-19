/**
 * Created by benpurslow on 13/06/2017.
 */

//Core Imports
const React = require('react');
const moment = require('moment');
const _ = require('lodash');

//Require SASS
require('../sass/main.scss');

//Util Functions
import {sleep} from '../utils/utils';

//Components
import {ReviewContainer} from './Reviews/ReviewContainer';
import {Company} from './Company';
import {Loader} from './Loader';


class Widget  extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            // Purely for transition purposes
            opening: false
        };

        // Passes this once, more efficient that doing per render
        // (https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //If transitioning, ignore click events
        if (this.state.opening === true){
            e.preventDefault();
        } else {
            this.state.opening = this.setState({opening: true});

            //Prepare for closure
            let self = this;

            /**
             * Work around for visual purposes.
             * Waits for roughly the same length as CSS transition then triggers class change
             * This changes the style of the reviews and stops any/most clunky actions
             *
             * Probably a better way to do this with React(CSS)TransitionGroup
             **/
            sleep(1000).then( function() {
                self.state.open = self.setState({open: !self.state.open, opening: false});
            });
        }
    }

    isActive() {
        /**
         * Using old SASS so just updating a string for the class
         * In "improved" SASS I'd have the collapsing/collapsed be an element of widget__wrapper
         * i.e. widget__wrapper--collapsing
         **/
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
            <section className={this.isActive()} onClick={this.handleClick}>
                <Company/>
                {/* If widget is open, mount ReviewContainer with Loader (ReviewContainer handles the loader)*/}
                {this.state.open || this.state.opening ? <ReviewContainer><Loader/></ReviewContainer>: null}
            </section>
        )
    }
}

export default Widget;
