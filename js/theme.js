$(document).ready(function () {
    var rellax = new Rellax('.rellax', {
        center: true
    });


    new WOW().init();
// smooth scroller

    // smooth();

// Faz o back do browser fechar o modal
    $(".modal").on("shown.bs.modal", function() { // any time a modal is shown
        var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url

        // smoothOff();
    });

    $(".modal").on("hidden", function() { // any time a modal is shown
       console.log("desligando");

        // smoothOff();
    });

    $('#modal-detalha').on('shown', function() {
        $("body").css("overflow", "hidden");
    });

    $('#modal-detalha').on('hidden', function() {
        $("body").css("overflow", "visible");
        console.log("ligando");
        // smooth();
    });

    $('body').on('hidden.bs.modal', '.modal', function() {
        $(this).removeData('bs.modal');
       // smooth();
    });

// If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function() {
        $(".modal").modal('hide');
    });

});

/*
function smoothOff(){


    window.addEventListener('DOMMouseScroll', function(event){}, false);
    window.onmousewheel = document.onmousewheel = function(event){};
}

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function smooth() {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 1000;
        var distance = 300;
        $('body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }


}*/