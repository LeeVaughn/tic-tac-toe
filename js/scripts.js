// self-excuting function
!function () {
    const $board = $("#board");
    const $playerO = $("#player1");
    const $playerX = $("#player2");
    let $startHTML;
    let $name1HTML;
    let $name2HTML;
    const $box = $(".box");
    let $xMoves;
    let $0Moves;

    // creates start screen
    function startScreen() {
        $startHTML = $("<div class='screen screen-start' id='start'>" +
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
            // stores player name inputs
            $nameInput1 = $("#input1").val().toUpperCase();
            $nameInput2 = $("#input2").val().toUpperCase();
            // adds generic player name to player 1 if left blank
            if ($nameInput1 === "") {
                $nameInput1 = "Player 1";
            }
            // adds the name of computer to player 2 if left blank
            if ($nameInput2 === "") {
                $nameInput2 = "COMPUTER";
            }

            // creates p elements to display player names
            $name1HTML = $("<p>" + $nameInput1 + "</p>");
            $name2HTML = $("<p>" + $nameInput2 + "</p>");

            // calls functions necessary to begin game
            randomizePlayer();
            beginGame();
            gamePlay();
        });
    }

    // randomly determines which player plays X
    function randomizePlayer() {
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        if (randomNumber % 2 === 0) {
            $playerX.prepend($name1HTML);
            $playerO.prepend($name2HTML);
        } else {
            $playerO.prepend($name1HTML);
            $playerX.prepend($name2HTML);
        }
    }

    // removes start screen elements, shows game board and adds active class to player X
    function beginGame() {
        $startHTML.remove();
        $board.show();
        $playerX.addClass("active");
    }

    // shows active player's game piece when an empty square is hovered over
    function gamePlay() {
        $box.mouseover(function () {
            if (!$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")) {
                if ($playerX.hasClass("active")) {
                    $(this).css("background-image", "url('img/x.svg')");
                }
                if ($playerO.hasClass("active")) {
                    $(this).css("background-image", "url('img/o.svg')");
                }
            }
        });
        $box.mouseout(function () {
            if (!$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")) {
                if ($playerX.hasClass("active")) {
                    $(this).css("background-image", "none");
                }
                if ($playerO.hasClass("active")) {
                    $(this).css("background-image", "none");
                }
            }
        });
        $box.click(function () {
            if (!$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")) {
                if ($playerX.hasClass("active")) {
                    $(this).addClass("box-filled-2");
                    oActive();
                    console.log(this.id);
                } else if ($playerO.hasClass("active")) {
                    $(this).addClass("box-filled-1");
                    xActive();
                }
            }
        });
    }

    function xActive() {
        $playerO.removeClass("active");
        $playerX.addClass("active");
    }

    function oActive() {
        $playerX.removeClass("active");
        $playerO.addClass("active");
    }

    function endCheck() {

    }

    // hides game board by default
    $board.hide();
    // call the start screen function on page load
    startScreen();





}();
