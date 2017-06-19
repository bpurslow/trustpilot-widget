/**
 * Created by benpurslow on 11/06/2017.
 */

import React from 'react';


export class Loader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="loader">
                <div className="loading"/>
                <div className="loading"/>
                <div className="loading"/>
                <div className="loading"/>
                <div className="loading"/>
            </section>
        )
    }
}

export default Loader;
