/**
 * Created by benpurslow on 22/06/2017.
 */

import {API_KEY, BASE_URL} from '../consts';


export function getTrustpilotData(args) {
    return new Promise((resolve, reject) => {
        let api_url = (typeof args.api_path !== undefined ? args.api_path : "");
        let params = (typeof args.params !== undefined ? args.params : "");
        let query = "";

        // Thank you stackoverflow! ;)
        // https://stackoverflow.com/questions/316781/how-to-build-query-string-with-javascript/34209399#34209399
        if (params) {
            let esc = encodeURIComponent;
            query = Object.keys(params)
                .map(k => esc(k) + '=' + esc(params[k]))
                .join('&');
        }

        //This should really be a generic function of 'trustpilotRequest()' or something that takes the method in
        fetch(BASE_URL + api_url + `?` + query + `&apikey=${API_KEY}`,
            {
                method: 'GET'
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                //TODO: Error logging for failed get
                console.log("getTrustpilotData Failed Miserably...");
        });
    });
}

export function postTrustpilotData(args) {
    return new Promise((resolve, reject) => {
        let api_url = (typeof args.api_path !== undefined ? args.api_path : "");

        /**
         * As per docs, https://developers.trustpilot.com/authentication
         * I don't even know if you can post reviews haha, either way, this function would be used for any post
         * Pretty sure most POST calls require <Business user OAuth Token>
         */

        fetch(BASE_URL + api_url,
            {
                method: 'POST',
                body: args.data
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                //TODO: Error logging for failed get
                console.log("postTrustpilotData Failed Miserably...probably for the best");
        });
    });
}
