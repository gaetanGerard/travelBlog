$(document).ready(function() {

    // ! fonction pour ouvrir le popup

    $(".username-popup").on("click", function () {
        $(".profil.popup-overlay").addClass("active");
    });
    $("#closePopup").on("click", function () {
        $(".profil.popup-overlay").removeClass("active");
    });
    $(document).click(function (event) {
        if (!$(event.target).closest(".profil.popup-overlay,#usernameOpenPopup").length) {
            $("body").find(".profil.popup-overlay").removeClass("active");
            $("body").find(".panel").removeClass("active");
        }
    });

    // ! fonction pour délcencher l'acordéon

    $(".panel-trigger.messageT").on("click", function() {
        if(!$(".panel-message").hasClass("active")) {
            $(this).next().addClass("active");
            $(".panel-notification").removeClass("active");
        } else {
            $(this).next().removeClass("active");
        }
    });

    $(".panel-trigger.notificationT").on("click", function () {
        if (!$(".panel-notification").hasClass("active")) {
            $(this).next().addClass("active");
            $(".panel-message").removeClass("active");
        } else {
            $(this).next().removeClass("active");
        }
    });
});