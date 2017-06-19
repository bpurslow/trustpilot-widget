/**
 * Created by benpurslow on 11/06/2017.
 */

import {sleep} from '../utils/utils.js';

export function getReviews(number_of_reviews) {
    /**
     * Call to fake api
     * Get response and parse
     * number_of_reviews: Int to determine number of fake reviews
     */
    return sleep(5000)
        .then(function () {

            let reviews = [];

            if (!number_of_reviews) {
                number_of_reviews = 5;
            }

            let first_name = [
                "Simon",
                "Gav",
                "Justin",
                "Erika",
                "Hugo"
            ];
            let last_name = [
                "Lock",
                "Wright",
                "Wolfe",
                "Beja",
                ""
            ];
            let review_title = [
                "Super quality.. I will show here again!",
                "Princely Sum",
                "Good Services",
                "Nightmare experience - no product, no communication, no refund; improved by rapid resolution",
                "FRAUD"
            ];
            let review_body = [
                "Super nice quality, fast devilery, good prices. I will shop here again!",
                "A decent local curry house in Faversham, Kent known for its Elvis nights.",
                "In early 2012, I ordered a set of chairs from Infurn. I thought that by ordering in March, I would have what I needed by November, certainly. I wanted the perfect chairs for my house, and really did not NEED them before the annual Thanksgiving dinner (the only time of year I have a need for a whole lot of chairs at one time). I played it safe, I thought, by ordering so far in advance. \
                                       Week after week, month after month, Infurn's website kept updating the status of the order so that the chairs' arrival would be further and further in the distant future. Finally when the week of Thanksgiving arrived, and I had had contact with their customer service in early November (and their only clueless reply was to say, 'We had manufacturing problems; let's hope the chairs arrive this week as scheduled.'), I still had no chairs, had to go out and buy some other chairs and still had no clue when the Infurn chairs might arrive. \
                                       At some point I finally just requested a refund because Infurn could neither deliver my chairs nor give me a solid date about when I might receive them when I inquired about a delivery date. They finally offered me a refund - which I accepted on 14 December 2012.",
                "I've been patiently waiting for a miracle to happen with our order AU-316084, 12 Chairs!! First the delays, lots and lots of delays with no apparent reason... after they send just 1/2 of the order and say it's all... So we bought 'Pairs' of chairs... we paid for 5 PAIRS and received 5 chairs!!! The other 2, the rocket chairs we never receive.... \
                                        Communication ZERO, they simply ignore the e-mails... when they did respond they asked us to prove our order to be pairs!!! LOL and just stopped communicating... their website is constantly down... probably to make lose interest and rest your forces to recover what you paid for!!",
                "A decent place to introduce your taste buds to fiery Indian fare"
            ];
            let star_rating = ["1", "2", "3", "4", "5"];
            let review_reply = [
                "We are SOOOOOOO sorry /s",
                "This is completely unacceptable and we apologise profusely. Please visit again and we'll make sure this never happens again",
                undefined,
                undefined,
                "Meh..."
            ];

            for (let n = 0; n < number_of_reviews; ++n) {
                let first_n = first_name[Math.floor(Math.random() * first_name.length)];
                let last_n = last_name[Math.floor(Math.random() * last_name.length)];
                reviews.push({
                    "id": n + 1,
                    "firstName": first_n,
                    "lastName": last_n,
                    "fullName": first_n + " " + last_n,
                    "reviewTitle": review_title[Math.floor(Math.random() * review_title.length)],
                    "reviewBody": review_body[Math.floor(Math.random() * review_body.length)],
                    "reviewStars": star_rating[Math.floor(Math.random() * star_rating.length)],
                    "reviewReply": review_reply[Math.floor(Math.random() * review_reply.length)]
                })
            }

            return reviews;
        });
}
