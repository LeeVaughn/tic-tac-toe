// self-executing function
!function () {
    let $startHTML;
    const $board = $("#board");
    let $name1HTML;
    let $name2HTML;
    const $playerO = $("#player1");
    const $playerX = $("#player2");
    let moveNumber = 0
    let xSquares = [];
    let oSquares = [];

    // creates start screen
    function startScreen() {
        $startHTML = $(`
            <div class='screen screen-start' id='start'>
                <header>
                <h1>Tic Tac Toe</h1>
                <div class='input'>
                    <input type='text' id='input1' placeholder='Enter 1st player name'></input>
                    <input type='text' id='input2' placeholder='Enter 2nd player name'></input>
                    <p>Leave 2nd player blank to play against the computer</p>
                </div>
                <a href='#' class='button'>Start game</a>
                </header>
            </div>
            `);
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
                $nameInput1 = "PLAYER 1";
            }
            // adds the name of computer to player 2 if left blank
            if ($nameInput2 === "") {
                $nameInput2 = "COMPUTER";
            }

            // creates p elements to display player names
            $name1HTML = $(`<p class="name1"> ${$nameInput1} </p>`);
            $name2HTML = $(`<p class="name1"> ${$nameInput2} </p>`);

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
            $playerX.append($name1HTML);
            $playerO.append($name2HTML);
        } else {
            $playerO.pappend($name1HTML);
            $playerX.append($name2HTML);
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
        const $box = $(".box");
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
                    xSquares.push(this.id);
                    moveNumber += 1;
                    endCheck(xSquares, "two");
                    oActive();
                } else if ($playerO.hasClass("active")) {
                    $(this).addClass("box-filled-1");
                    oSquares.push(this.id);
                    moveNumber += 1;
                    endCheck(oSquares, "one");
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

    function endCheck(activePlayer, activeNumber) {
        let winner = false;
        const $playerName = $(".active").find("p").text();
        if (activePlayer.includes("one") && activePlayer.includes("two") && activePlayer.includes("three")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("four") && activePlayer.includes("five") && activePlayer.includes("six")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("seven") && activePlayer.includes("eight") && activePlayer.includes("nine")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("one") && activePlayer.includes("five") && activePlayer.includes("nine")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("three") && activePlayer.includes("five") && activePlayer.includes("seven")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("one") && activePlayer.includes("four") && activePlayer.includes("seven")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("two") && activePlayer.includes("five") && activePlayer.includes("eight")) {
            winner = true;
            winScreen($playerName, activeNumber);
        }
        if (activePlayer.includes("three") && activePlayer.includes("six") && activePlayer.includes("nine")) {
            winner = true;
            winScreen($playerName, activeNumber);
        } else if (moveNumber === 9 && winner === false) {
            tieScreen();
        }
    }

    function winScreen(name, playerNumber) {
        const $winHTML = $(`
            <div class="screen screen-win screen-win-${playerNumber}" id="finish">
                <header><h1>Tic Tac Toe</h1>
                    <p class="message"> ${name} wins!</p>
                    <a href="#" class="button">New game</a>
                </header>
            </div>
            `);

        $board.remove();
        $("body").append($winHTML);
        newGame();
    }

    function tieScreen() {
        const $tieHTML = $(`
            <div class="screen screen-win screen-win-tie" id="finish">
                <header>
                    <h1>Tic Tac Toe</h1>
                    <p class="message">It's a draw!</p>
                    <a href="#" class="button">New game</a>
                </header>
            </div>
            `);

        $board.remove();
        $("body").append($tieHTML);
        newGame();
    }

    function newGame() {
        $(".button").click(function () {
            location.reload();
        });
    }

    // call the start screen function on page load
    startScreen();





}();
