    var p1b = true;
    var p2b = false;
    var p3b = false;
    var p4b = false;

    function topScroll() {
        $('html, body').animate({scrollTop : 0},3000);
    }

    function midScroll() {
        $('html, body').animate({scrollTop: 1000}, 3000);
    }

    function vidScroll() {
        $('html, body').animate({scrollTop: 2500}, 3000);
    }

    function botScroll() {
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
    }