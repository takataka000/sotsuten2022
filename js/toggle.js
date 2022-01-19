$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".header-sp__list").toggleClass('active');
});

$(".header-sp__content a").on("click", function() {
    // $(".◇◇ ul").slideToggle();
    $(".header-sp__list").removeClass("active");
    $(".openbtn").removeClass("active");
    });