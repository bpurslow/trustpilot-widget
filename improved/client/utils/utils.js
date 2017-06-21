import {API_KEY, BASE_URL} from '../consts';

export function randomInt(min,max) {
    return (Math.random()*(max-min)+min);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getStarImage(starRating) {
    try {
        return require('../img/star-ratings/'+ starRating +'-stars.png');
    } catch(err) {
        return require('../img/star-ratings/na-stars.png');
    }
}

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

        fetch(BASE_URL + api_url + `?` + query + `&apikey=${API_KEY}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                console.log("dammit");
        });
    });
}