/**
 * Created by benpurslow on 30/05/2017.
 */
function load(wrapper) {
    /**
     * Trigger load bar inside wrapper
     */

    wrapper.empty();
    wrapper.append(`
            <div class="loader"></div>
        `);
    for (let n = 0; n < 5; ++ n) {
        $('.loader').append(`
            <div class="loading"></div>
        `);
    }
}

function detach_load(wrapper) {
    /**
     * Detach load bar from wrapper
     */
    wrapper.find(".loader").remove();
}