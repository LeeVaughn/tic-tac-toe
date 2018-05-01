// self-excuting function
!function () {
    const $board = $("#board");
    const $playerO = $("#player1");
    const $playerX = $("#player2");
    let $name1HTML;
    let $name2HTML;

    function startScreen() {
        const $startHTML = $("<div class='screen screen-start' id='start'>" +
            "<header><h1>Tic Tac Toe</h1><div class='input'>" +
            "<input type='text' id='input1' placeholder='Enter 1st player name'></input>" +
            "<input type='text' id='input2' placeholder='Enter 2nd player name'></input>" +
            "<p>Leave 2nd player blank to play against the computer</p>" +
            "</div><a href='#' class='button'>Start game</a></header></div>");
        let $nameInput1;
        let $nameInput2;

        // hides game board, appends start screen info, puts focus on first input field
        $board.hide();
        $("body").append($startHTML);
        $("#input1").focus();

        $(".button").click(function () {
            // store user inputs, creates p element to display them, and appends them to page
            $nameInput1 = $("#input1").val().toUpperCase();
            $name1HTML = $("<p>" + $nameInput1 + "</p>");
            $nameInput2 = $("#input2").val().toUpperCase();
            $name2HTML = $("<p>" + $nameInput2 + "</p>");
            $playerX.prepend($name1HTML);
            $playerO.prepend($name2HTML);
            $startHTML.remove();
            
            randomizePlayer();
            beginGame();
        });
    }

    function randomizePlayer() {
        let randomNumber = Math.floor(Math.random() * 100) +1;

        if (randomNumber % 2 === 0) {
            $playerX.prepend($name1HTML);
            $playerO.prepend($name2HTML);
        } else {
            $playerO.prepend($name1HTML);
            $playerX.prepend($name2HTML);
        }
    }

    function beginGame() {
        $board.show();
        $playerX.addClass("active");
    }

    // call the start screen function on page load
    startScreen();

    // hides game board by default
    $board.hide();





}();
