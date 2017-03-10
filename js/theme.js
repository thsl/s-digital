$(document).ready(function () {
    var rellax = new Rellax('.rellax', {
        center: true
    });


    new WOW().init();
// smooth scroller
    /*
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
     var time = 1000; // delay time
     var distance = 300; // delta point
     // Dom where it will apply
     $('.modal').stop().animate({
     scrollTop: $(window).scrollTop() - (distance * delta)
     }, time);
     }*/

    $('#modal-detalha').on('shown', function() {
        $("body").css("overflow", "hidden");
    });

    $('#modal-detalha').on('hidden', function() {
        $("body").css("overflow", "visible");
    });

    $('body').on('hidden.bs.modal', '.modal', function() {
        $(this).removeData('bs.modal');
    });

// Faz o back do browser fechar o modal
    $(".modal").on("shown.bs.modal", function() { // any time a modal is shown
        var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url
    });

// If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function() {
        $(".modal").modal('hide');
    });



});