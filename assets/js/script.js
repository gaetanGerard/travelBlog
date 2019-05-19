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

    // ! fonction pour naviguer dans le slider

    let slider = $(".recentPost-container");
    let slider_content = slider.children(".recentPost");
    let prev = $(".sliderNav-item.left");
    let next = $(".sliderNav-item.right");
    let currentPosition = 0;
    let count = 0;


    next.on("click", function() {

        if (currentPosition === count) {
            count++;
            currentPosition++;

            nextPosition(currentPosition);

            if(count >= 3) {
                resetPositive(2);
            }
        }
    });

    prev.on("click", function () {

        if (currentPosition === count) {
            count--;
            currentPosition--;

            if(currentPosition === 1) {
                slider_content.animate({"left" : "0"});
            } else {
                prevPosition(currentPosition);

                if (count <= 3) {
                    resetNegative();
                }
            }
        }
    });

    function resetPositive (index) {
        if (count >= slider_content.length - index) {
            count = 0;
            currentPosition = 0;
        }
    }

    function resetNegative() {
        if (count <= -3) {
            count = 0;
            currentPosition = 0;
        }
    }

    function nextPosition(currentPosition) {
        switch (currentPosition) {
            case 1:
                slider_content.animate({"left" : "-640px"});
                break;
            case 2:
                slider_content.animate({ "left": "-1280px" });
                break;
            default:
                slider_content.animate({ "left": "0" });
                break;
        }
    }

    function prevPosition(currentPosition) {
        switch (currentPosition) {
            case -1:
                slider_content.animate({ "left": "-1280px" });
                break;
            case -2:
                slider_content.animate({ "left": "-640px" });
                break;
            default:
                slider_content.animate({ "left": "0" });
                break;
        }
    } 
    
    // ! fonction pour display block ou none les articles récents / populaire

    $(".popRec-title-container .populaire").on("click", function () {

        if (!$(this).hasClass("active") && $(".popRec-title-container .recent").hasClass("active")) {
            $(".popRec-title-container .recent").removeClass("active");
            $(this).addClass("active");

            $(".popAndRec-container.populaire").removeClass("unactive");
            $(".popAndRec-container.recent").addClass("unactive");
        }        
    });

    $(".popRec-title-container .recent").on("click", function () {

        if (!$(this).hasClass("active") && $(".popRec-title-container .populaire").hasClass("active")) {
            $(".popRec-title-container .populaire").removeClass("active");
            $(this).addClass("active");

            $(".popAndRec-container.recent").removeClass("unactive");
            $(".popAndRec-container.populaire").addClass("unactive");
        } 
    });
});