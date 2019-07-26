$(window).load(function() {
    let slider = $("#slider");
    let modal = $("#productModal");
    let btn = $(".add-cart-btn");
    let span = $(".close");

    slider.nivoSlider({
        effect: 'fade',
        pauseTime: 5000,
        controlNav: false,
    });

    btn.click(function() {
        modal.css("display", "block");
    });

    span.click(function() {
        modal.css("display", "none");
    });

    modal.click(function(event) {
        if (event.target == modal[0]) 
            modal.css("display", "none");   
    });
});
