/**
 * Created by benpurslow on 13/06/2017.
 */

//Core Imports
const React = require('react');

//Require SASS
require('../sass/main.scss');

//Util Functions
import {sleep} from '../utils/utils';

//Services
import {getCompany} from '../services/Company';

//Components
import {ActionsContainer} from './Actions/ActionsContainer';
import {ReviewContainer} from './Reviews/ReviewContainer';
import {Company} from './Company';
import {Loader} from './Loader';


class Widget  extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            // Purely for transition purposes
            opening: false,
            loading: true,
            companyId: ""
        };

        // Passes this once, more efficient that doing per render
        // (https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let self = this;
        getCompany().then( function (companyId) {
            console.log("Done?");
            self.setState({companyId: companyId, loading: false});
        })
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
        return `widget${widgetState}`;
    }

    render() {
        if(this.state.loading) {
            return (
                <section className="widget">
                    <Loader/>
                </section>
            )
        } else {
            return (
                <section className={this.isActive()} onClick={this.handleClick}>
                    <section className="widget__overview">
                        <Company companyId={this.state.companyId}/>
                    </section>
                    {/* If widget is open, mount ReviewContainer with Loader (ReviewContainer handles the loader)*/}
                    <section className="widget__contents">
                        <ActionsContainer/>
                        {this.state.open || this.state.opening ? <ReviewContainer companyId={this.state.companyId}><Loader/></ReviewContainer>: null}
                    </section>
                </section>
            )
        }
    }
}

export default Widget;
