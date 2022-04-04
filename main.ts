/**
 * 0 - scissors
 * 
 * 1 - rock
 * 
 * 2 - paper
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (Math.abs(counter % 3) == 0 && receivedNumber == 2 || Math.abs(counter % 3) == 1 && receivedNumber == 0 || Math.abs(counter % 3) == 2 && receivedNumber == 1) {
        basic.showString("You won!")
    } else if (Math.abs(counter % 3) == 0 && receivedNumber == 1 || Math.abs(counter % 3) == 1 && receivedNumber == 2 || Math.abs(counter % 3) == 2 && receivedNumber == 0) {
        basic.showString("You lost!")
    } else {
        basic.showString("Tie!")
    }
})
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
input.onButtonPressed(Button.A, function () {
    counter += 1
    changeLEDs()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(Math.abs(counter % 3))
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    changeLEDs()
})
let counter = 0
counter = 0
basic.showLeds(`
    # . . . #
    # # . # .
    # # # . .
    # # . # .
    # . . . #
    `)
radio.setGroup(1)
