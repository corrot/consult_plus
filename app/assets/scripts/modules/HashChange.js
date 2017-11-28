window.addEventListener("hashchange", function(e) {
    window.scrollTo(window.scrollX, window.scrollY - 136);
    console.log(e.oldURL);
    // console.log(e.newURL);

    // console.log(window.location.hash)
});