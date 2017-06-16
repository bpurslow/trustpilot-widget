/**
 * Created by benpurslow on 16/06/2017.
 */
import {Company} from "./Company";

const company = new Company();

test('getCompanyId returns object of company data', () => {
    expect(company._getCompany()).toEqual({
        "companyTitle": "1",
        "trustscore": "2",
        "totalReviews": "3",
        "starRating": "4"
    });
});