// self-excuting function
!function () {
    const $board = $("#board");

    function startScreen() {
        const $screen = $("<div class='screen screen-start' id='start'><header><h1>Tic Tac Toe</h1><a href='#' class='button'>Start game</a></header></div>");
        // hides game board and appends start screen info
        $board.hide();
        $("body").append($screen);

        $(".button").click(function () {
            $screen.remove();
            $board.show();
        });
    }

    startScreen();





}();
