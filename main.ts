
// Saves opponents choice or evaluates results
radio.onReceivedNumber(function (receivedNumber) {
    if (result_sent) {
        showResult(receivedNumber);
    } else {
        opponent_result = receivedNumber
    }
})
// Changes LED display based on counter value
function changeLEDs () {
    if (counter % 3 == 0) {
        basic.showLeds(`
            # . . . #
            # # . # .
            # # # . .
            # # . # .
            # . . . #
            `)
    } else if (Math.abs(counter % 3) == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
// Incremets counter representing players choice
input.onButtonPressed(Button.A, function () {
    if (!(result_sent)) {
        counter += 1
        changeLEDs()
    }
})
// Sends players choice to the opponent
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(Math.abs(counter % 3))
    result_sent = true
    if (opponent_result || opponent_result == 0) {
        showResult(opponent_result);
    }
})
// Decrements counter representing players choice
input.onButtonPressed(Button.B, function () {
    if (!(result_sent)) {
        counter += -1
        changeLEDs()
    }
})

// Compares players and opponent choices and evaluates result,
function showResult(opponentChoice: Number) {
    const myChoice = Math.abs(counter % 3)
    if (myChoice == 0 && opponentChoice == 2 || myChoice == 1 && opponentChoice == 0 || myChoice == 2 && opponentChoice == 1) {
        basic.showString("Winner!")
    } else if (myChoice == 0 && opponentChoice == 1 || myChoice == 1 && opponentChoice == 2 || myChoice == 2 && opponentChoice == 0) {
        basic.showString("Loser!")
    } else {
        basic.showString("Tie!")
    }
    control.reset()
}

/**
 * Declaration and initialization of variables
 */
let result_sent = false
let counter = 0
let opponent_result: number;
basic.showLeds(`
    # . . . #
    # # . # .
    # # # . .
    # # . # .
    # . . . #
    `)
radio.setGroup(1)
