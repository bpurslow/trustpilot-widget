/**
 * Created by benpurslow on 30/05/2017.
 */
function load(wrapper) {
    wrapper.empty();
    console.log("Attaching Loader");
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
    console.log("Detaching Loader");
    wrapper.find(".loader").remove();
}