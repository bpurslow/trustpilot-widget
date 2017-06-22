

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
