$(document).ready(function () {
    console.log("ready");

    $("#scrollTop-btn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(".my-navbar .navbar-dropdown-btn").click(function () {
        navbarDropdown = $(this).attr("data-target");
        // console.log(navbarDropdown);
        $(navbarDropdown).toggleClass("active");
    })
    // hamberger btn
    $(".hamberger-btn").click(function () {
        $(".hamberger-menu").toggleClass("show");
    })
});