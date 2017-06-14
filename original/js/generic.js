/**
 * Created by benpurslow on 01/06/2017.
 */

function randomInt(min,max) {
    /**
     * Generic random int function between 2 digits
     */
    return (Math.random()*(max-min)+min).toFixed(1);
}

function sleep(ms) {
    /**
     * Generic sleep function with promise
     */
  return new Promise(resolve => setTimeout(resolve, ms));
}